import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import logoof from "../Image/logoof.png";
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

import CartContext from "../context/cart/CartContext";

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
}));

const Navbar = () => {
  let history = useHistory();
  const [value1, setValue1] = useState(0);
  const value = ["/", "/men", "/women"];

  function handleClick(click) {
    history.push(click);
  }

  function Click(click) {
    history.push(click);
  }

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    console.log(value1);
    setValue1(newValue);
  };

  //
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
            <div style={{ float: "left" }}>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                src={logoof}
                alt=""
              />
            </div>
            {isMatch ? (
              <>
                <DrawerComponent />
              </>
            ) : (
              <>
                <Tabs
                  onChange={handleClickTab}
                  className={classes.tabsContainer}
                  value={
                    history.location.pathname === "/cart"
                      ? null
                      : history.location.pathname
                  }
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
                    disableRipple
                    label="Home"
                  />
                  <Tab
                    value={value[1]}
                    onClick={() => {
                      handleClick("/men");
                    }}
                    disableRipple
                    label="Men"
                  />
                  <Tab
                    value={value[2]}
                    onClick={() => {
                      handleClick("/women");
                    }}
                    disableRipple
                    label="Women"
                  />
                </Tabs>

                <div style={{ margin: "auto", color: "black" }}>
                  <input
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                    type="text"
                    placeholder="Search Your Products"
                    value={inputData}
                    onChange={(evant) => setInputData(evant.target.value)}
                  />
                  <button
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      marginLeft: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => searchBar(inputData)}
                  >
                    <SearchOutlined />
                  </button>
                </div>
                <div
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <Badge count={totalQty}>
                    <Avatar
                      onClick={showDrawer}
                      style={{
                        backgroundColor: "white",
                        color: " #012a4a",
                      }}
                      shape="square"
                      size="small"
                      icon={<ShoppingCartOutlined />}
                    />
                  </Badge>
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "25px",
                    cursor: "pointer",
                    marginRight: "30px",
                  }}
                >
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
            <div
              style={{
                border: "2px solid #012a4a ",
                textAlign: "center",
                padding: "10px",
                marginBottom: "5px",
                height: "70px",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  float: "right",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(item.id)}
              >
                <CloseOutlined />
              </button>
              <img
                style={{ height: "50px", width: "30px", float: "left" }}
                src={item.image}
                alt=""
              />

              <small>{item.title.slice(0, 10)}</small>
              <br />

              <small>
                {item.qty}×{item.price}$
              </small>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <p>Total Price : ${totalPrice}</p>

            <button
              style={{
                border: "none",
                marginRight: "10px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#012a4a ",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                Click("/cart");
              }}
            >
              <small> View Cart</small>
            </button>
            <button
              style={{
                border: "none",
                marginRight: "10px",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#012a4a ",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                Click("/checkout");
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
