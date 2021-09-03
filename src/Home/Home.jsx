import React from "react";
import Product from "./Product";
import Banner from "./Banner";
import BannerButton from "./BannerButton";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Banner></Banner>
      <div
        style={{
          marginTop: "100px",

          marginLeft: "120px",
        }}
      >
        <BannerButton></BannerButton>
      </div>
      <div>
        <Product></Product>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
