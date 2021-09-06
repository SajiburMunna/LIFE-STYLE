import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//image preview
import { Row, Col, Select, InputNumber, Button, Tabs, Form } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Footer from "../Footer/Footer";
import CartContext from "./../context/cart/CartContext";

const { TabPane } = Tabs;

const Productdetails = () => {
  const { addToCart } = useContext(CartContext);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/ ${id}`)
      .then((res) => {
        setPost({ ...res.data, qty: 1 });
        // setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(post);

  const { Option } = Select;

  function handleChangeSize(value) {
    // console.log(`selected ${value}`);
    setSize(value);
  }
  function handleChangeColor(value) {
    // console.log(`selected ${value}`);
    setColor(value);
  }
  function handleChangeQuantity(value) {
    setQty(value);
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
                    onChange={handleChangeSize}
                    placeholder="Select to Size"
                  >
                    <Option value="S">S</Option>
                    <Option value="M">M</Option>
                    <Option value="L">L</Option>
                    <Option value="XL">XL</Option>
                  </Select>
                </Form.Item>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Select
                  style={{ width: 150 }}
                  onChange={handleChangeColor}
                  placeholder="Select to Color"
                >
                  <Option value="White">White</Option>
                  <Option value="White">Black</Option>
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
                    defaultValue={1}
                    onChange={handleChangeQuantity}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      onClick={() =>
                        size && color
                          ? addToCart({
                              ...post,
                              size: size,
                              color: color,
                              qty: qty,
                            })
                          : alert("Select Your Size and Color")
                      }
                    >
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
          style={{ font: "#012a4a" }}
          tabPosition="left"
          size="large"
          defaultActiveKey="1"
          onChange={callback}
        >
          <TabPane
            tab={
              <span style={{ color: "#012a4a", borderColor: "black" }}>
                DESCRIPTION
              </span>
            }
            key="1"
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "#012a4a" }}> DESCRIPTION</h2>
              <p>{post.description}</p>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span style={{ color: "#012a4a" }}>ADDITIONAL INFORMATION</span>
            }
            key="2"
          >
            <div style={{ textAlign: "center" }}>
              <h2> ADDITIONAL INFORMATION</h2>
              <p>{post.title}</p>
              Price: ${post.price} Category: {post.category}
            </div>
          </TabPane>
          <TabPane
            tab={<span style={{ color: "#012a4a" }}>REVIEWS</span>}
            key="3"
          >
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
