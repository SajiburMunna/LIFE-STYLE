import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

import CartContext from "./../context/cart/CartContext";
import { useContext } from "react";

import "./Pagination.css";

const ProductShow = ({ pd }) => {
  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }
  // const title = pd.title.substr(0, 30);

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div style={{ cursor: "contextMenu" }}>
        <Card
          hoverable
          style={{
            textAlign: "center",
            backgroundColor: "#e8e8e8",

            height: "400px",
          }}
          cover={
            <img
              onClick={() => handleClick(pd.id)}
              style={{ height: "250px", padding: "10px", cursor: "pointer" }}
              alt="example"
              src={pd.image}
            />
          }
        >
          <p style={{ cursor: "pointer" }} onClick={() => handleClick(pd.id)}>
            {pd.title.slice(0, 25)}
          </p>
          <Button style={{ color: "#012a4a" }} onClick={() => addToCart(pd)}>
            Add Cart
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ProductShow;
