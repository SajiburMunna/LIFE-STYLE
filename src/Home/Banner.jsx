import React from "react";

import { Carousel } from "antd";
import "antd/dist/antd.css";

import img1 from "../Image/img1.jpg";
import img2 from "../Image/img2.jpg";
import img3 from "../Image/img3.png";

const contentStyle = {
  height: "400px",
  width: "1400px",
};

const Banner = () => {
  return (
    <Carousel autoplay style={{ marginTop: "60px" }}>
      <div>
        <img style={contentStyle} src={img1} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={img2} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={img3} alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
