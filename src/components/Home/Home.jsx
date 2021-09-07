import React from "react";
import Product from "../Products/Product";
import Banner from "../Banner/Banner";
import BannerButton from "../Banner/BannerButton";
import Footer from "../../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="banner-div">
      <Banner></Banner>
      <div className="banner-button-div">
        <BannerButton></BannerButton>
      </div>

      <Product></Product>

      <Footer></Footer>
    </div>
  );
};

export default Home;
