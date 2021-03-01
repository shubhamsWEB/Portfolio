import React from "react";
import "../css/contact.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      name: "",
      message: "",
    };
    this.initialState = {
      currentStep: 1,
      email: "",
      name: "",
      message: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  _ = (id) => {
    return document.getElementById(id);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const { email, name, message, currentStep } = this.state;
    if (currentStep !== 3) {
      var Step = currentStep + 1;
      this.setState({ currentStep: Step });
    }
    if (currentStep === 3) {
      // alert(`Your registration detail: \n
      //        Email: ${email} \n
      //        Name: ${name} \n
      //        Message: ${message}`)
      this._("mybtn").disabled = true;
      this._("status").innerHTML = "please wait ...";
      var formdata = new FormData();
      formdata.append("name", `${name}`);
      formdata.append("email", `${email}`);
      formdata.append("message", `${message}`);
      var ajax = new XMLHttpRequest();
      ajax.open("POST", "index.php");
      ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
          if (ajax.responseText == "success") {
            this._("my_form").innerHTML =
              "<h2>Thanks " +
              this._("name").value +
              ", your message has been sent.</h2>";
          } else {
            this._("status").innerHTML = ajax.responseText;
            this._("mybtn").disabled = false;
          }
        }
      };
      ajax.send(formdata);
      // this.setState(this.initialState);
    }
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn ctr-btn btn-light"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn ctr-btn btn-light float-right"
          type="button"
          onClick={this._next}
        >
          Continue
        </button>
      );
    }
    return null;
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        {/* <div className="container">
          <h1 className="heading-1-contact">
            Interested in working together?‍
          </h1>
          <p className="contact-p">
            Drop a mail at <span>shubhama664@gmail.com</span> and i will get
            back to you asap &#128151;
          </p>
        </div> */}

        <form id="my_form" onSubmit={this.handleSubmit.bind(this)} className="container contact-section">
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            name={this.state.name}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            message={this.state.message}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form> 
        <p className="form-steps" style={{fontFamily: 'Saira'}}>{this.state.currentStep}/3</p> 
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group animated zoomIn">
      <input
        className="form-control input-form"
        id="name"
        name="name"
        type="text"
        placeholder="Enter your Name"
        value={props.name}
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group animated zoomIn">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control input-form"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group animated zoomIn">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control input-form"
          id="message"
          name="message"
          type="text"
          placeholder="Your message"
          value={props.message}
          onChange={props.handleChange}
          required
        />
      </div>
      <button id="mybtn" className="btn send-btn btn-success float-right">
        Send Message
      </button>
      <span id="status"></span>
    </React.Fragment>
  );
}
export default Contact;
