/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductShow from "./ProductShow";
import ReactPaginate from "react-paginate";
import "../Pagination.css";

import { Divider, Spin, BackTop } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useContext } from "react";

import CartContext from "../../context/cart/CartContext";
import "antd/dist/antd.css";
import "../../index.css";
import "./Product-css/Product.css";

const Product = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

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

  console.log(post);

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 12;
  const pageVisited = pageNumber * userPerPage;

  // const displayUsers = post.slice(pageVisited, pageVisited + userPerPage);

  const pageCount = Math.ceil(post.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const { search } = useContext(CartContext);

  return (
    <>
      <div className="product-container">
        <Divider orientation="center" dashed>
          <h1>ALL PRODUCTS</h1>
        </Divider>
        <div className="spin-div">{loading && <Spin size="large"></Spin>}</div>
        <Row gutter={[16, 16]}>
          {post
            .slice(pageVisited, pageVisited + userPerPage)
            .filter((p) => {
              if (search === "") {
                return p;
              } else if (p.title.toLowerCase().includes(search.toLowerCase())) {
                return p;
              }
            })

            .map((pd) => (
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                key={Math.random()}
              >
                <ProductShow
                  pd={{ ...pd, qty: 1, size: "M", color: "Black" }}
                ></ProductShow>
              </Col>
            ))}
        </Row>
      </div>
      <BackTop className="back-top"></BackTop>
      {!loading && (
        <div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      )}
    </>
  );
};

export default Product;
