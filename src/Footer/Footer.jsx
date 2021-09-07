import React from "react";
import "antd/dist/antd.css";

import { Row, Col, Divider } from "antd";
import { FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 className="title">ABOUT US</h5>
          <div>
            <h5>
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
          <h5 className="title">RECENT POSTS</h5>
          <div>
            <h5>Bangladesh makes a fashion statement – Nikkei Asian Review</h5>
          </div>
          <Divider type="horizontal" dashed className="Divider" />
          <div>
            <h5>টি-শার্টে বিশ্বকাপ – Dhaka Times</h5>
          </div>
          <Divider type="horizontal" dashed className="Divider" />
          <div>
            <h5>Rise | Meet the Roadies – ICE TODAY</h5>
          </div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 className="title">INFORMATION</h5>
          <div>
            <h5>ABOUT US</h5>
          </div>
          <Divider type="horizontal" dashed className="Divider" />
          <div>
            <h5>CONTACT US</h5>
          </div>
          <Divider className="Divider" type="horizontal" dashed />
          <div>
            <h5>BLOG</h5>
          </div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <h5 className="title">GET TO KNOW US</h5>
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
