import React from "react";
import cursorDot from "cursor-dot";
import "../css/about.css";
class About extends React.Component {
  componentDidMount() {
    var side1 = document.getElementById("side1");
    window.addEventListener("scroll", function () {
      side1.style.left = -window.pageYOffset + "px";
    });
    var side2 = document.getElementById("side2");
    window.addEventListener("scroll", function () {
      side2.style.left = window.pageYOffset + "px";
    });
    const cursor = cursorDot({
      diameter: 30,
      borderWidth: 1,
      borderColor: "#121212",
      easing: 4,
      background: "transparent",
    });
    cursor.over(".card-deck .card", {
      background: "#fff",
      scale: 2.5,
    });
    cursor.over(".fa-bars", {
      scale: 1.4,
    });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <div className="about-section">
          <div style={{zIndex: '9999999'}} className="heading-1 text-center laptop-view animated bounceInUp">UI/UX DESIGNER / FREELANCER <br /> FULL STACK DEVELOPER</div>
          <div className="container">
          <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
          </div>
          <section>
            <div className="side" id="side1"></div>
            <div className="side" id="side2"></div>
          </section>
          <div className="contentBx1">
            <h2 className="heading-1">I'm Shubham Agrawal</h2>
            <h3 className="mb-3 my-role">Web Designer/Developer</h3>
            <p className="my-description">
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter. Fueled by high
              energy levels and boundless enthusiasm, I’m easily inspired and
              more then willing to follow my fascinations wherever they take me.
              I’m passionate, expressive, multi-talented spirit with a natural
              ability to entertain and inspire. I’m never satisfied to just come
              up with ideas. Instead I have an almost impulsive need to act on
              them. My abundant energy fuels me in the pursuit of many
              interests, hobbies, areas of study and artistic endeavors. I’m a
              fast learner, able to pick up new skills and juggle different
              projects and roles with relative ease. I like to develop expertise
              in a number of areas over the course of my life and career. I’m a
              people-person with deep emotions and empathy, a natural
              storyteller. I’m able to inspire and am at my best when I’m
              sharing my creative expressions with others. I'm currently working as an Software Engineer at GeekyAnts India Pvt. Ltd.
            </p>
          </div>
          <h2 className="heading-1 text-center mt-3 mb-3">Skills</h2>
            <ul className="skills container">
              <li>

                <p style={{ width: "85%" }} data-value="85">
                  REACT JS
                </p>
                <progress max="100" value="85" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "85%" }}>85%</span>
                  </div>
                </progress>

                <p style={{ width: "80%" }} data-value="80">
                  ANGULAR JS
                </p>
                <progress max="100" value="80" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "80%" }}>80%</span>
                  </div>
                </progress>

                <p style={{ width: "85%" }} data-value="85">
                  HTML5
                </p>
                <progress max="100" value="85" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "85%" }}>85%</span>
                  </div>
                </progress>

                {/* <!-- CSS3 --> */}
                <p style={{ width: "90%" }} data-value="90">
                  CSS3
                </p>
                <progress max="100" value="90" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "90%" }}>90%</span>
                  </div>
                </progress>

                {/* <!-- jQuery --> */}
                <p style={{ width: "70%" }} data-value="70">
                  jQuery
                </p>
                <progress max="100" value="70" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "70%" }}>70%</span>
                  </div>
                </progress>
              </li>
              <li>
                <p style={{ width: "80%" }} data-value="80">
                  JavaScript
                </p>
                <progress max="100" value="80" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "80%" }}>80%</span>
                  </div>
                </progress>

                <p style={{ width: "75%" }} data-value="75">
                  REST API
                </p>
                <progress max="100" value="80" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "80%" }}>80%</span>
                  </div>
                </progress>

                <p style={{ width: "85%" }} data-value="85">
                  MY/MS SQL
                </p>
                <progress max="100" value="85" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "85%" }}>85%</span>
                  </div>
                </progress>
                <p style={{ width: "100%" }} data-value="100">
                  BOOTSTRAP
                </p>
                <progress max="100" value="98" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "98%" }}>98%</span>
                  </div>
                </progress>

                <p style={{ width: "80%" }} data-value="80">
                  JAVA
                </p>
                <progress max="100" value="80" class="skills-bar">
                  <div class="progress-bar">
                    <span style={{ width: "80%" }}>80%</span>
                  </div>
                </progress>

              </li>
            </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
