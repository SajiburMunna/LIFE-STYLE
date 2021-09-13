import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import logoof from "../../Image/logoof.png";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import DrawerComponent from "./DrawerComponent";

import { Drawer } from "antd";
import "antd/dist/antd.css";

import {
  UserOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Badge, Avatar } from "antd";
import { useContext } from "react";

import CartContext from "../../context/cart/CartContext";
import "../NavBar/Nav-css/Navbar.css";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },

  icons: {
    fontSize: "1.4rem",
  },
  toolbar: theme.mixins.toolbar,
  app: { backgroundColor: "#012a4a" },
  color: { color: "#fff" },
  nav: {
    background: "white",
    width: "100px",
    marginLeft: "30px",
  },
}));

const Navbar = () => {
  let history = useHistory();
  const [value1, setValue1] = useState(0);
  const value = ["/", "/men", "/women"];
  console.log(value1);

  function handleClick(click) {
    history.push(click);
  }

  function Click(click) {
    history.push(click);
  }

  const classes = useStyles();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickTab = (e, newValue) => {
    setValue1(newValue);
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { cartItems, removeItem, searchBar } = useContext(CartContext);

  const [inputData, setInputData] = useState("");
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
    <>
      <AppBar className={classes.app}>
        <div>
          <Toolbar>
            <div className="toolbar-div">
              <img className="toolbar-img-logo" src={logoof} alt="logo" />
            </div>
            {isMatch ? (
              <>
                <DrawerComponent />
              </>
            ) : (
              <>
                <Tabs
                  value={value && history.location.pathname}
                  onChange={handleClickTab}
                  TabIndicatorProps={{
                    style: {
                      background: "white",
                      width: "100px",
                      marginLeft: "30px",
                    },
                  }}
                >
                  <Tab
                    value={value[0]}
                    onClick={() => {
                      handleClick("/");
                    }}
                    label="Home"
                  />
                  <Tab
                    value={value[1]}
                    onClick={() => {
                      handleClick("/men");
                    }}
                    label="Men"
                  />
                  <Tab
                    value={value[2]}
                    onClick={() => {
                      handleClick("/women");
                    }}
                    label="Women"
                  />
                </Tabs>

                <div className="serachbar-div">
                  <input
                    className="serachbar"
                    type="text"
                    placeholder="Search Your Products"
                    value={inputData}
                    onChange={(evant) => setInputData(evant.target.value)}
                  />
                  <button
                    className="searchbar-button"
                    onClick={() => searchBar(inputData)}
                  >
                    <SearchOutlined />
                  </button>
                </div>
                <div className="badge-div">
                  <Badge count={totalQty}>
                    <Avatar
                      onClick={showDrawer}
                      className="avatar"
                      shape="square"
                      size="medium"
                      icon={<ShoppingCartOutlined />}
                    />
                  </Badge>
                </div>
                <div className="login-button-div">
                  <UserOutlined
                    onClick={() => {
                      handleClick("/log");
                    }}
                  />
                </div>
              </>
            )}
          </Toolbar>
        </div>
      </AppBar>
      <div>
        <Drawer
          title="ADD CART"
          closable={false}
          onClose={onClose}
          visible={visible}
          zIndex={2000}
        >
          {cartItems.map((item) => (
            <div className="add-cart-div">
              <button
                className="add-cart-remove-button"
                onClick={() => removeItem(item.id)}
              >
                <CloseOutlined />
              </button>
              <img className="add-cart-image" src={item.image} alt="" />

              <small>{item.title.slice(0, 10)}</small>
              <br />

              <small>
                {item.qty}×{item.price}$
              </small>
            </div>
          ))}
          <div className="total-price-div">
            <p>Total Price : ${totalPrice.toFixed(2)}</p>

            <button
              className=" view-cart-checkout-button"
              onClick={() => {
                Click("/cart");
              }}
            >
              <small> View Cart</small>
            </button>
            <button
              className="view-cart-checkout-button"
              onClick={() => {
                Click("/log");
              }}
            >
              <small> Check Out</small>
            </button>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
