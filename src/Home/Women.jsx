import React from "react";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Spin, Divider } from "antd";

import { useHistory } from "react-router-dom";

const Women = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const jewelery = post.filter((pd) => pd.category === "jewelery");
  const womenclothing = post.filter((p) => p.category === "women's clothing");
  const women = [...womenclothing, ...jewelery];

  console.log(women);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }
  return (
    <>
      <div style={{ padding: "60px" }}>
        <Divider orientation="center" dashed>
          <h1 style={{ color: "#012a4a" }}>WOMEN'S PRODUCTS</h1>
        </Divider>
        <div style={{ textAlign: "center" }}>
          {loading && <Spin size="large"></Spin>}
        </div>
        <Row gutter={[16, 16]}>
          {women.map((p) => (
            <Col
              key={Math.random()}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <Card
                onClick={() => handleClick(p.id)}
                style={{
                  textAlign: "center",
                  boxShadow: " ",
                  height: "400px",
                  backgroundColor: "#e8e8e8",
                }}
                hoverable
                cover={
                  <img
                    style={{ height: "250px", padding: "10px" }}
                    alt="example"
                    title="Women's Products"
                    src={p.image}
                  ></img>
                }
              >
                <p>{p.title}</p>
                <Button>Add Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Women;
