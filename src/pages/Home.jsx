import React, { useEffect } from "react";

import IconLogo from "../assets/imgs/iconlogo.jpeg";
import Logo from "../assets/imgs/logo.jpeg";
import SitLogo from "../assets/imgs/SITlogo.png";

import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";

// 3
import Button from "../components/Button";
import CountDown from "../components/CountDown";

import Events from "../components/Events";
import Services from "../components/Services";
import Contact from "../components/Contact";

import { META_EVENTS, SPONSERS, contentData } from "../utils/constants";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* <div className="iconlogo">
        <img src={IconLogo}
              width={250}
        />
        <img className="sitlogo" src={SitLogo}
              width={250}
        />
      </div> */}
      {/* hero-section */}
      <div className="hero" style={{ zIndex: 180, position: "relative" }}>
        <div className="container logo">
          <div className="logo-img">
            <img
              width={320}
              src={Logo}
              alt="Petrona - A National Level Technical Symposium"
            />
          </div>

          <div className="logo-txt glow" style={{ fontFamily: "Netron" }}>
            ICON'25
          </div>
          <div className="glitch-wrapper">
            <div
              className="glitch"
              style={{ margin: "16px 0" }}
              data-glitch="A National Level Technical Symposium"
            >
              A National Level Technical Symposium
            </div>
          </div>
          <Button className="reg-btn" />
          <p style={{ fontSize: 34 }}>17th FEB'25</p>
        </div>
      </div>

      {/* CountDown */}
      <h1 className="count-h">COUNTDOWN</h1>
      <CountDown />

      {/*About*/}
      {Object.entries(contentData).map(([key, section]) => (
        <div className="content-container" key={key}>
          <h1 class="count-h">{section.title}</h1>
          <p class="count-p">{section.text}</p>
        </div>
      ))}

      {/* Tech Events */}
      {META_EVENTS.map((data, key) => (
        <div key={key}>
          <h1 className="count-h">{data.title}</h1>
          <p className="count-p">{data.desc}</p>

          <div className="grid-conatiner" style={{ position: "relative" }}>
            {data.events.map((event, index) => (
              <Events
                style={{ position: "relative" }}
                events={event}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Event Details */}
      <p className="count-p" style={{ fontSize: 38, paddingTop: 8 }}>
        Explore Our Awaited Offerings !
      </p>
      <Services />

      {/* Sponsers  */}
      <h1 className="count-h">SPONSORS</h1>
      <div className="grid-sponsers">
        {SPONSERS.map((sponser, index) => (
          <div className="card" key={index}>
            <img src={sponser.imgURL} width="230" alt={sponser.name} />
          </div>
        ))}
      </div>

      {/* Conatct Info */}
      <h1 className="count-h">CONTACT US</h1>
      <Contact />
    </div>
  );
}

export default Home;
