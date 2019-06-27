import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="./images/365daysofcode.jpg" alt="" />
      <p className="legend">365 Days - Image 1</p>
    </div>
    <div>
      <img src="./images/batman_logo.jpg" alt="" />
      <p className="legend">Batman Logo - Image 2</p>
    </div>
    <div>
      <img src="./images/batman-wallpaper-1920x1080.jpg" alt="" />
      <p className="legend">Batman - Image 3</p>
    </div>
    <div>
      <img src="./images/batman.jpg" alt="" />
      <p className="legend">Batman - Image 4</p>
    </div>
  </Carousel>
);
