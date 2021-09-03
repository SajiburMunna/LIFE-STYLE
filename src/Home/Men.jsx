import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Spin, Divider } from "antd";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

const Men = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const men = post.filter((pd) => pd.category === "men's clothing");

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
          <h1 style={{ color: "#012a4a" }}>MEN'S PRODUCTS</h1>
        </Divider>
        <div style={{ textAlign: "center" }}>
          {loading && <Spin size="large"></Spin>}
        </div>
        <Row gutter={[16, 16]}>
          {men.map((p) => (
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
                    src={p.image}
                  />
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

export default Men;
