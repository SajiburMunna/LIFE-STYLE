import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import "../Pagination.css";
import "./Product-css/Product-Show.css";

const ProductShow = ({ pd }) => {
  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }

  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        <Card
          className="product-show-card"
          hoverable
          cover={
            <img
              onClick={() => handleClick(pd.id)}
              className="product-show-image "
              alt="example"
              src={pd.image}
            />
          }
        >
          <p onClick={() => handleClick(pd.id)}>{pd.title.slice(0, 25)}</p>
          <p>{pd.price}$</p>
          <Button className="product-show-button" onClick={() => addToCart(pd)}>
            Add Cart
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ProductShow;
