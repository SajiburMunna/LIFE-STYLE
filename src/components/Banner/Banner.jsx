import React from "react";

import { Carousel } from "antd";
import "antd/dist/antd.css";
import "../Banner/Banner.css";

import img1 from "../../Image/img1.jpg";
import img2 from "../../Image/img2.jpg";
import img3 from "../../Image/img3.png";

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
