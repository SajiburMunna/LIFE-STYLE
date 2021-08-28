import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//image preview
import { Row, Col, Select, InputNumber, Button, Tabs, Form } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Footer from "../Footer/Footer";
const { TabPane } = Tabs;

const Productdetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/ ${id}`)
      .then((res) => {
        setPost(res.data);
        // setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(value) {
    console.log("changed", value);
  }

  function callback(key) {
    console.log(key);
  }
  function onFinish() {}
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 40 }}
            sm={{ span: 24 }}
            md={{ span: 16 }}
            lg={{ span: 12 }}
          >
            <div>
              <img
                style={{ height: "400px", width: "300px" }}
                src={post.image}
                alt=""
              />
            </div>
          </Col>
          <Col span={12}>
            <h2 style={{ marginTop: "100px", marginBottom: "10px" }}>
              {post.title}
            </h2>
            <h3>$ {post.price}</h3>
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <div style={{ marginBottom: "10px" }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Select
                    style={{ width: 150 }}
                    onChange={handleChange}
                    placeholder="Select to Size"
                  >
                    <Option value="1">S</Option>
                    <Option value="2">M</Option>
                    <Option value="3">L</Option>
                    <Option value="4">XL</Option>
                  </Select>
                </Form.Item>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Select
                  style={{ width: 150 }}
                  onChange={handleChange}
                  placeholder="Select to Color"
                >
                  <Option value="1">white</Option>
                  <Option value="2">blue</Option>
                </Select>
              </div>
              <div>
                <div>
                  <h4 style={{ float: "left", marginRight: "10px" }}>
                    Quantity :{" "}
                  </h4>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={0}
                    onChange={onChange}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Button type="primary">
                      <ShoppingCartOutlined />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Tabs
          tabPosition="left"
          size="large"
          defaultActiveKey="1"
          onChange={callback}
        >
          <TabPane tab="DESCRIPTION" key="1">
            <div style={{ textAlign: "center" }}>
              <h2> DESCRIPTION</h2>
              <p>{post.description}</p>
            </div>
          </TabPane>
          <TabPane tab="ADDITIONAL INFORMATION" key="2">
            <div style={{ textAlign: "center" }}>
              <h2> ADDITIONAL INFORMATION</h2>
              <p>{post.title}</p>
              Price: ${post.price} Category: {post.category}
            </div>
          </TabPane>
          <TabPane tab="REVIEWS" key="3">
            <div style={{ textAlign: "center" }}>
              <h2>REVIEWS</h2>
              <p>No Reviews Yet Now!</p>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Productdetails;
