import React from "react";

import { useContext, useState, useEffect } from "react";

import CartContext from "../context/cart/CartContext";

import { Card, Image } from "antd";
import { Button } from "@material-ui/core";
import { CloseOutlined, ClearOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let item = 0;
    let price = 0;

    cartItems.forEach((items) => {
      item += items.qty;
      price += items.qty * items.price;
    });
    setTotalQty(item);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalQty, setTotalQty, setTotalPrice]);
  return (
    <div>
      <div style={{ padding: "100px" }}>
        <div style={{ float: "right" }}>
          <Card
            style={{ color: "#012a4a ", width: "300px" }}
            title="Cart Totals"
            extra={
              <Button
                onClick={() => {
                  clearCart();
                }}
                style={{ color: "red" }}
              >
                <ClearOutlined />
              </Button>
            }
          >
            <h5 style={{ color: "#012a4a " }}>Total Qunatity :{totalQty}</h5>
            <h5 style={{ color: "#012a4a " }}>Total Price : {totalPrice} </h5>
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
                  <small>{item.title.slice(0, 25)}</small>
                  <h2>
                    {item.qty} × {item.price} $
                  </h2>
                  <small>
                    Size : {item.size} - Color : {item.color}
                  </small>
                  <small></small>
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
