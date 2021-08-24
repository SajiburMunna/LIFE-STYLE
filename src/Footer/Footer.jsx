import React from "react";
import "antd/dist/antd.css";

import { Row, Col, Divider } from "antd";
import { FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";

const style = {
  background: "#0092ff",
  padding: "5px 0",
  textAlign: "center",
  marginTop: "20px",
};

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "60px" }}>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 style={style}>ABOUT US</h5>
          <div>
            <h5 style={{ color: "white" }}>
              RISE is a modern lifestyle clothing brand that puts emphasis on
              style and fashion. RISE infuses street culture with national and
              traditional styling.RISE represents one thing; pride in yourself.
            </h5>
          </div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 style={style}>RECENT POSTS</h5>
          <div>
            <h5 style={{ color: "white" }}>
              Bangladesh makes a fashion statement – Nikkei Asian Review
            </h5>
          </div>
          <Divider
            type="horizontal"
            dashed
            style={{ backgroundColor: "white" }}
          />
          <div>
            <h5 style={{ color: "white" }}>টি-শার্টে বিশ্বকাপ – Dhaka Times</h5>
          </div>
          <Divider
            type="horizontal"
            dashed
            style={{ backgroundColor: "white" }}
          />
          <div>
            <h5 style={{ color: "white" }}>
              Rise | Meet the Roadies – ICE TODAY
            </h5>
          </div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 style={style}>INFORMATION</h5>
          <div>
            <h5 style={{ color: "white" }}>ABOUT US</h5>
          </div>
          <Divider
            type="horizontal"
            dashed
            style={{ backgroundColor: "white" }}
          />
          <div>
            <h5 style={{ color: "white" }}>CONTACT US</h5>
          </div>
          <Divider
            type="horizontal"
            dashed
            style={{ backgroundColor: "white" }}
          />
          <div>
            <h5 style={{ color: "white" }}>BLOG</h5>
          </div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 style={style}>GET TO KNOW US</h5>
          <div>
            <h2>
              <a
                href="https://www.facebook.com/risebrandclothing"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookFilled /> Facebook
              </a>
            </h2>
          </div>

          <div>
            <h2>
              <a
                href="https://www.facebook.com/risebrandclothing"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterSquareFilled /> Twitter
              </a>
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
