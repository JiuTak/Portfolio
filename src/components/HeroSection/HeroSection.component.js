import React from "react";
// import { Button } from "../Button/Button.component";
import "./HeroSection.css";
import "../../App.css";
import video2 from "../../resources/videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video2} autoPlay loop muted />
      <h1>Ready to roll, Jiu</h1>
      <p> A Fresh new frontend developer full of potential and absorb all knowledge with sponge native skill. </p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
