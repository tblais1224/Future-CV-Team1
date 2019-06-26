import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Landing extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src="https://via.placeholder.com/150

C/O https://placeholder.com/"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    );
  }
}

export default Landing;
