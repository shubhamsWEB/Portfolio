import React from "react";
import "../css/home.css";
import GrabberHead from "../images/head.svg";
import GrabberHand from "../images/hand.svg";
import Grabberhandwaiting from "../images/hand-waiting.svg";
import Grabberhandwithcursor from "../images/hand-with-cursor.svg";
import Grabberhandsurfsup from "../images/hand-surfs-up.svg";
import githubicon from "../images/github.png";
import fbicon from "../images/fb.png";
import twittericon from "../images/twitter.png";
import * as VanillaTilt from "vanilla-tilt";
import Resume from "../Resume.pdf";
import $ from "jquery";
const { useState, useRef, useEffect, useLayoutEffect } = React;

/**
 * Globals
 */
const ASSETS = {
  head: `${GrabberHead}`,
  waiting: `${GrabberHand}`,
  stalking: `${Grabberhandwaiting}`,
  grabbing: `${GrabberHand}`,
  grabbed: `${Grabberhandwithcursor}`,
  shaka: `${Grabberhandsurfsup}`,
};

// Preload images
Object.keys(ASSETS).forEach((key) => {
  const img = new Image();
  img.src = ASSETS[key];
});

/**
 * Shared hooks
 */

// Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};

// Mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

// Element position
const usePosition = () => {
  const ref = useRef();
  const [position, setPosition] = useState({});

  const handleResize = () => {
    setPosition(ref.current.getBoundingClientRect());
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref.current]);

  return [ref, position];
};

/**
 * React Components
 */

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: false,
      cursorGrabbed: false,
      gameOver: false,
    };

    this.handleToggleDebug = this.handleToggleDebug.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.handleCursorGrabbed = this.handleCursorGrabbed.bind(this);
  }
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".main-content"), {
      max: 30,
      speed: 1000,
    });

    //Adding animate.css class on hover
    $(".social-media img").hover(
      function () {
        $(this).addClass("animated rubberBand");
      },
      function () {
        $(this).removeClass("animated rubberBand");
      }
    );
  }
  handleToggleDebug() {
    this.setState({
      debug: !this.state.debug,
    });
  }

  handleCursorGrabbed() {
    this.setState({
      cursorGrabbed: true,
    });
    setTimeout(() => {
      this.setState({
        cursorGrabbed: false,
      });
    }, 2000);
  }

  handleButtonClicked() {
    this.setState({
      gameOver: true,
    });
    setTimeout(() => {
      this.setState({
        gameOver: false,
      });
    }, 4000);
  }
  downloadResume() {
    alert("Downloading...");
  }
  render() {
    const { cursorGrabbed, gameOver } = this.state;
    const screenStyle = cursorGrabbed ? { cursor: "none" } : {};

    return (
      <React.Fragment>
        <div className="grabber-app" style={screenStyle}>
          <div class="social laptop-view">
            <ul>
              <li>
                <a href="https://github.com/shubhamsWEB">
                  Github <img alt="github" src={githubicon} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AkbarShubham">
                  Twitter <img alt="twitter" src={twittericon} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/shubham.agrawal.568/">
                  Facebook <img alt="facebook" src={fbicon} />
                </a>
              </li>
            </ul>
          </div>
          <div id="container">
            <div className="container text-center main-heading">
              <div className="main-content">
                <h3 className="greating animated tada">
                  Hello World!
                  <br />
                  I'm
                </h3>
                <h1 className="name animated fadeInUp delay-1s">
                  Shubham Agrawal
                </h1>
                <h5 className="role animated fadeInUp delay-2s">
                  FULL STACK WEB DEVELOPER
                </h5>
              </div>
              {/* <div class="downloadcontainer">
                <input id="funky" type="checkbox" />
                <label htmlFor="funky">
                  <div class="downloadcontainer_button">
                    <a href={Resume} download>
                      <span>
                        <i class="icon ion-code-download"></i>{" "}
                        <span>MY RESUME</span>
                      </span>
                      <span class="downloading">Downloading</span>
                      <i class="icon d_icon ion-cube"></i>
                      <i class="icon complete ion-checkmark-round"></i>
                      <div class="downloadcontainer_button__bar"></div>
                    </a>
                  </div>
                </label>
              </div> */}
            </div>
            <div className="dot"></div>
            {/* <button
            className="debug-button"
            onClick={this.handleToggleDebug}>
              Debug
          </button> */}
            <div className="social-media mobile-view">
              <a className="animated fadeInUp delay-1s" href="https://github.com/shubhamsWEB">
                <img alt="github" src={githubicon} />
              </a>
              <a className="animated fadeInUp delay-2s" href="https://twitter.com/AkbarShubham">
                <img alt="twitter" className="ml-md-4 ml-2" src={twittericon} />
              </a>
              <a className="animated fadeInUp delay-3s" href="https://www.facebook.com/shubham.agrawal.568/">
                <img alt="facebook" className="ml-md-4 ml-2" src={fbicon} />
              </a>
            </div>
            {/* <div className="footer">
              <div style={{ width: "100%" }} className="text-center footer">
                Designed by &#9889; Shubham Agrawal &#9889;{" "}
              </div>
            </div> */}
            <button
              className="trap-button laptop-view"
              onClick={this.handleButtonClicked}
            >
              {gameOver && "Nice one"}
              {cursorGrabbed && "Try Again..! :D"}
              {!gameOver && !cursorGrabbed && "DO NOT CLICK !"}
            </button>
            <div className="laptop-view grab-zone-wrapper">
              <GrabZone
                onCursorGrabbed={this.handleCursorGrabbed}
                cursorGrabbed={cursorGrabbed}
                gameOver={gameOver}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// GrabZone (The hover trigger zone)
const GrabZone = ({ cursorGrabbed, gameOver, onCursorGrabbed }) => {
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);

  let state = "waiting";
  if (outerHovered) {
    state = "stalking";
  }
  if (innerHovered) {
    state = "grabbing";
  }
  if (cursorGrabbed) {
    state = "grabbed";
  }
  if (gameOver) {
    state = "shaka";
  }

  // If state is grabbing for a long time, they're being clever!
  useEffect(() => {
    let timer;
    if (state === "grabbing") {
      timer = setTimeout(() => {
        // Not so clever now, are they?
        setExtendedArm(true);
        timer = null;
      }, 2000);
    }
    return () => {
      setExtendedArm(false);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [state]);

  return (
    <div className="grab-zone" ref={outerRef}>
      <div className="grab-zone__debug">
        <strong>Debug info:</strong>
        <p>Current state: {state}</p>
        <p>Extended arm: {isExtended ? "Yes" : "No"}</p>
      </div>
      <div className="grab-zone__danger" ref={innerRef}>
        <Grabber
          state={state}
          gameOver={gameOver}
          extended={isExtended}
          onCursorGrabbed={onCursorGrabbed}
        />
      </div>
    </div>
  );
};

// Grabber (The graphic)
const Grabber = ({ state, gameOver, extended, onCursorGrabbed }) => {
  const mousePos = useMousePosition();
  const [ref, position] = usePosition();
  const hasCursor = false;

  // Calculate rotation of armWrapper
  const x = position.left + position.width * 0.5;
  const y = position.top + position.height * 0.5;
  const angle = gameOver
    ? 0
    : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI);

  // Ensure value is within acceptable range (-75 to 75)
  const rotation = Math.min(Math.max(parseInt(angle), -79), 79);

  const grabberClass = `grabber grabber--${state} ${
    extended && "grabber--extended"
  }`;
  const wrapperStyle = { transform: `rotate(${rotation}deg)` };

  let handImageSrc = ASSETS[state];

  return (
    <div className={grabberClass}>
      <div className="grabber__body"></div>
      <img alt="Shubham" className="grabber__face" src={ASSETS.head} />
      <div className="grabber__arm-wrapper" ref={ref} style={wrapperStyle}>
        <div className="grabber__arm">
          <img alt="Shubham"
            className="grabber__hand"
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
