import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Spin, Divider } from "antd";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import "./Men.css";

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="men-container">
        <Divider orientation="center" dashed>
          <h1>MEN'S PRODUCTS</h1>
        </Divider>
        <div className="spin-div">{loading && <Spin size="large"></Spin>}</div>
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
                className="men-card"
                hoverable
                cover={
                  <img
                    onClick={() => handleClick(p.id)}
                    className="men-card-image"
                    alt="example"
                    src={p.image}
                  />
                }
              >
                <p onClick={() => handleClick(p.id)}>{p.title.slice(0, 25)}</p>
                <p>{p.price}</p>
                <Button onClick={() => addToCart({ ...p, qty: 1 })}>
                  Add Cart
                </Button>
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
