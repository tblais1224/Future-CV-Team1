import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./carousel/Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default Landing;
