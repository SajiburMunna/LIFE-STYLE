import React from "react";

import { useContext } from "react";

import CartContext from "../context/cart/CartContext";

import { Card, Image } from "antd";
import { Button } from "@material-ui/core";
import { CloseOutlined, ClearOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <div style={{ float: "right" }}>
          <Card
            style={{ color: "#012a4a ", width: "300px" }}
            title="Cart Totals"
            extra={
              <Button style={{ color: "red" }}>
                <ClearOutlined />
              </Button>
            }
          >
            <h5 style={{ color: "#012a4a " }}>
              Total Qunatity :{cartItems.length}
            </h5>
            <h5 style={{ color: "#012a4a " }}>Total Price : </h5>
            <div style={{ float: "right" }}>
              <Button style={{ backgroundColor: "#012a4a ", color: "white" }}>
                {" "}
                CHECKOUT
              </Button>
            </div>
          </Card>
        </div>
        <div>
          {!cartItems.length ? (
            <h1 style={{ padding: "100px", color: "#012a4a " }}>
              Your Cart Is Currently{" "}
              <span style={{ color: "red" }}>Empty!</span>
            </h1>
          ) : (
            cartItems.map((item) => (
              <Card
                style={{
                  width: "400px",
                  height: "150px",
                  marginTop: 16,
                  backgroundColor: "#e8e8e8",
                }}
              >
                <div style={{ float: "right" }}>
                  <Button
                    style={{ color: "red" }}
                    onClick={() => removeItem(item.id)}
                  >
                    <CloseOutlined />
                  </Button>
                </div>
                <div style={{ float: "left", marginRight: "10px" }}>
                  <Image
                    style={{ width: "100px", height: "100px" }}
                    src={item.image}
                  ></Image>
                </div>
                <div>
                  <small>{item.title}</small>
                  <h2> Price: {item.price}$ </h2>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
