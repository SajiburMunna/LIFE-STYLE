/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductShow from "./ProductShow";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

import { Divider, Spin, BackTop } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useContext } from "react";

import CartContext from "./../context/cart/CartContext";

const Product = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const result = post.filter((pd) => pd.category === "electronics");

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 8;
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = post.slice(pageVisited, pageVisited + userPerPage);

  const pageCount = Math.ceil(post.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const { search } = useContext(CartContext);

  return (
    <>
      <div style={{ padding: "60px" }}>
        <Divider orientation="center" dashed>
          <h1>ALL PRODUCTS</h1>
        </Divider>
        <div style={{ textAlign: "center" }}>
          {loading && <Spin size="large"></Spin>}
        </div>
        <Row gutter={[16, 16]}>
          {post
            .filter((p) => {
              if (search == null) {
                return p;
              } else if (p.category.includes(search)) {
                return p;
              }
            })

            // eslint-disable-next-line array-callback-return

            .map((p) => (
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                key={Math.random()}
              >
                <ProductShow pd={p}></ProductShow>
              </Col>
            ))}
        </Row>
      </div>
      <BackTop></BackTop>
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
