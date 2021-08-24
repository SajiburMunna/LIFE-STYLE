import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductShow from "./ProductShow";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
//import Divider from "@material-ui/core/Divider";

import { Divider, Spin, BackTop } from "antd";
import "antd/dist/antd.css";

const useStyles = makeStyles({
  root: { marginLeft: 140 },
  All_Product: { textAlign: "center" },
});

const Product = () => {
  const classes = useStyles();
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

  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;

  const displayUsers = post.slice(pageVisited, pageVisited + userPerPage);

  const pageCount = Math.ceil(post.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Divider orientation="center" dashed>
        <h1>ALL PRODUCTS</h1>
      </Divider>
      {/* <Divider variant="middle" /> */}
      <div style={{ textAlign: "center" }}>
        {loading && <Spin size="large"></Spin>}
      </div>

      <Box
        className={classes.root}
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={3}
        m={3}
        xs={12}
        sm={6}
        xl={3}
        bgcolor="background.paper"
      >
        {displayUsers.map((p) => (
          <ProductShow pd={p} key={Math.random()}></ProductShow>
        ))}
      </Box>
      <BackTop></BackTop>
      {!loading && (
        <div style={{ textAlign: "justify" }}>
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
