import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatchCart } from "./Cart";

const ProductShow = ({ pd }) => {
  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }
  const title = pd.title.substr(0, 30);

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <div>
      <div style={{ cursor: "contextMenu" }}>
        <Card
          hoverable
          style={{
            textAlign: "center",

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
            {title}
          </p>
          <Button>Add Cart</Button>
        </Card>
      </div>
    </div>
  );
};

export default ProductShow;
