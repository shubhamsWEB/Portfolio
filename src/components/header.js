import React from "react";
import "../css/header.css";
import $ from "jquery";
import cursorDot from "cursor-dot";
import logo from "../images/logo.png";
import {NavLink} from "react-router-dom";
class Header extends React.Component {
  componentDidMount() {
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

    var w = window.innerWidth,
      h = window.innerHeight,
      canvas = document.getElementById("bubble"),
      ctx = canvas.getContext("2d"),
      rate = 60,
      arc = 100,
      time,
      timerID,
      delay,
      count,
      size = 7,
      speed = 20,
      lights = new Array(),
      colors = ["#d59254", "#ffffff", "#1f2839", "#cf7693"];

    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);

    function init() {
      time = 0;
      count = 0;

      for (var i = 0; i < arc; i++) {
        lights[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 + 1,
          toY: Math.random() * 5 + 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }

    function bubble() {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < arc; i++) {
        var li = lights[i];

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
          li.x = 0;
        }
        if (li.y > h) {
          li.y = 0;
        }
        if (li.x < 0) {
          li.x = w;
        }
        if (li.y < 0) {
          li.y = h;
        }
      }
      if (time < speed) {
        time++;
      }
      timerID = setTimeout(bubble, 1000 / rate);
    }
    init();
    bubble();

    //navigation (this is my code)
    var animation = "easeOutCubic";
    delay = 60;
    //Adding animate.css class on hover
    $(".fa-bars").hover(
      function () {
        $(this).addClass("animated rubberBand");
      },
      function () {
        $(this).removeClass("animated rubberBand");
      }
    );

    $(document)
      .on("click", ".fa-bars", function () {
        var i = 0;
        $("nav").before($("#bubble"));
        $("#bubble").fadeIn();
        $("#mainnav")
          .find("li")
          .each(function () {
            var that = $(this);
            i++;
            (function (i, that) {
              setTimeout(function () {
                that
                  .animate({ left: "20px" }, { duration: 350 })
                  .fadeIn({ queue: false });
              }, delay * i);
            })(i, that);
          });
        $(".fa-bars").fadeOut(100, function () {
          $(this).removeClass("fa-bars").addClass("fa-times").fadeIn();
        });
      })
      .on("click", "#bubble, .fa-times, #mainnav ul li", function () {
        $("#bubble").fadeOut();
        $("#mainnav")
          .find("li")
          .animate({ left: "-550px" }, { duration: 250 })
          .fadeOut({ queue: false });

        $(".hamb").fadeOut(100, function () {
          $(this)
            .find($("i"))
            .removeClass("fa-times")
            .addClass("fa-bars")
            .end()
            .fadeIn();
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <nav role="navigation" id="mainnav">
          <ul>
            <li>
              <NavLink strict className="hvr-sweep-to-right" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="isActive" strict className="hvr-sweep-to-right" to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="isActive" strict className="hvr-sweep-to-right" to="/Works">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="isActive" strict className="hvr-sweep-to-right" to="/Contact">
                Say Hello!
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="logo float-left mt-3 ml-sm-2 ml-md-5">
          <span>
          <h4>
            <strong>शुभम्‌ अग्रवाल</strong>
          </h4>
          </span>
        </div>
        <div className="hamb float-right">
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <canvas id="bubble"></canvas>
      </React.Fragment>
    );
  }
}
export default Header;
