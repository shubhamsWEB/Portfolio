import React from "react";
import "../css/works.css";
import covidImg from "../images/covid19.png";
import samvid20Img from "../images/samvid20.png";
import samvidImg from "../images/Samvid.png";
import sudokuImg from "../images/Sudoku.png";
import movieImg from "../images/movieapp.png";
import rkpImg from "../images/rkp.png";
import walletImg from "../images/Ewallet.png";
import inventoryImg from "../images/Inventory.png";
import copicoImg from "../images/copico.png";
import rocketairImg from "../images/Rocket-Air.png"
import * as VanillaTilt from "vanilla-tilt";
import cursorDot from "cursor-dot";

class Works extends React.Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 30,
      speed: 1000,
    });
    const cursor = cursorDot({
      diameter: 30,
      background: "transparent",
      easing: 4,
    });
    cursor.over(".card-deck .card", {
      background: "#000",
      scale: 2.5,
    });
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <h1 className="heading-1 text-center mt-md-2 mb-md-3 mt-sm-1">My Projects</h1>
        <div className="container mb-5">
          <div class="card-deck">
            <div class="card">
              <img src={covidImg} class="card-img-top" alt="covid19" />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  Coronavirus(COVID-19) Tracker
                </h2>
                <p className="contentBx-description">
                  COVID-19 Tracker application which shows Coronavirus affected
                  States in India and daily news and Updates about COVID-19.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="http://covid19.shubhamsweb.in">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
            <div class="card">
              <img src={samvid20Img} class="card-img-top" alt="Samvid20" />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  SAMVID 2020 (Official Website)
                </h2>
                <p className="contentBx-description">
                  SAMVID is an Techno-Cultural Fest of Shri Shankharacharya
                  Group of Instutuions.
                </p>
                <a className="project-link" target="__blank" href="https://shubhamsweb.github.io/MaachateRaho/">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
              <img src={sudokuImg} class="card-img-top" alt="sudoku" />
              <div className="contentBx">
                <h2 className="contentBx-heading">Online Sudoku Game</h2>
                <p className="contentBx-description">
                  Online Sudoku in which the sudoku board is generated randomly
                  with all the rules.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="http://sudoku.shubhamsweb.in">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src={inventoryImg}
                class="card-img-top"
                alt="Inventory Management"
              />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  Inventory Management System
                </h2>
                <p className="contentBx-description">
                  Complete Inventory Management System with features like
                  Ordering,Purchasing,Warehousing etc.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="http://inventory.shubhamsweb.in">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
              <img src={walletImg} class="card-img-top" alt="E-Wallet" />
              <div className="contentBx">
                <h2 className="contentBx-heading">E-Wallet</h2>
                <p className="contentBx-description">
                  Online Virtual money transfer system to send and recieve money. 
                  <br />
                </p>
                <a className="project-link" target="__blank" href="http://wallet.shubhamsweb.in">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src={rkpImg}
                class="card-img-top"
                alt="Photography"
              />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  Photography Website
                </h2>
                <p className="contentBx-description">
                  Website design for a photographer with photo gallery.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="http://rkp--photography.000webhostapp.com/">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
              <img src={movieImg} class="card-img-top" alt="Movie App" />
              <div className="contentBx">
                <h2 className="contentBx-heading">Movie Rating App</h2>
                <p className="contentBx-description">
                  App which shows all detailes of the searched movie with IMDB rating.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="https://shubhamsweb.github.io/Movieapp/">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src={copicoImg}
                class="card-img-top"
                alt="Copico Systems"
              />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  Copico Systems
                </h2>
                <p className="contentBx-description">
                  Designed a Website for the computer firm.
                  <br />
                </p>
                <a className="project-link" target="__blank" href="https://shubhamsweb.github.io/">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
              <img src={samvidImg} class="card-img-top" alt="Samvid 2019" />
              <div className="contentBx">
                <h2 className="contentBx-heading">SAMVID 2019(Official Website)</h2>
                <p className="contentBx-description">
                SAMVID is an Techno-Cultural Fest of Shri Shankharacharya
                  Group of Instutuions.
                </p>
                <a className="project-link" target="__blank" href="https://shubhamsweb.github.io/SAMVID19/">
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src={rocketairImg}
                class="card-img-top"
                alt="Rocket-Air"
              />
              <div className="contentBx">
                <h2 className="contentBx-heading">
                  Rocket-Air(Moz Addon)
                </h2>
                <p className="contentBx-description">
                  Addon for Mozilla browser which can open multiple webpages. 
                </p>
                <button className="view-btn btn btn-block btn-outline-light">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Works;
