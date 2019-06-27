import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="./images/365daysofcode.jpg" alt="" />
      <p className="legend">Resume Image 1</p>
    </div>
    <div>
      <img src="./images/batman_logo.jpg" alt="" />
      <p className="legend">Resume Image 2</p>
    </div>
    <div>
      <img src="./images/batman-wallpaper-1920x1080.jpg" alt="" />
      <p className="legend">Resume Image 3</p>
    </div>
    <div>
      <img src="./images/batman.jpg" alt="" />
      <p className="legend">Resume Image 4</p>
    </div>
  </Carousel>
);
