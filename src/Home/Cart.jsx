import React from "react";

import { useContext } from "react";

import CartContext from "../context/cart/CartContext";

import { Card, Image } from "antd";
import { Button } from "@material-ui/core";
import { CloseOutlined, ClearOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  return (
    <div style={{ padding: "100px" }}>
      <div style={{ float: "right" }}>
        <Card
          title="Cart Totals"
          extra={
            <Button style={{ color: "red" }}>
              <ClearOutlined />
            </Button>
          }
          style={{ width: "300px" }}
        >
          <h5>Total Qunatity :{cartItems.length}</h5>
          <h5>Total Price : </h5>
          <div style={{ float: "right" }}>
            <Button>PROCEED TO CHECKOUT</Button>
          </div>
        </Card>
      </div>
      {!cartItems.length ? (
        <h1 style={{ padding: "100px" }}>
          Your Cart Is Currently <span style={{ color: "red" }}>Empty!</span>
        </h1>
      ) : (
        cartItems.map((item) => (
          <Card
            style={{
              width: 600,
              height: "200px",
              marginTop: 16,
              backgroundColor: "#013a63",
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
            <div style={{ float: "left" }}>
              <Image
                style={{ width: "100px", height: "100px" }}
                src={item.image}
              ></Image>
            </div>

            <small>{item.title}</small>
            <h2> Price: {item.price}$ </h2>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
