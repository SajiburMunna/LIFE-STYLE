import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";
import logo from "../Image/logo.png";
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

import { Drawer, Modal } from "antd";
import "antd/dist/antd.css";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Badge, Avatar } from "antd";
import { useContext } from "react";

import CartContext from "../context/cart/CartContext";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1.9rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },

  icons: {
    fontSize: "1.4rem",
  },
  toolbar: theme.mixins.toolbar,
  app: { backgroundColor: blue[400] },
  color: { color: "#fff" },
}));

const Navbar = () => {
  let history = useHistory();
  const [value1, setValue1] = useState(0);
  const value = ["/", "/men", "/women"];

  function handleClick(click) {
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <AppBar className={classes.app}>
        <div>
          <Toolbar>
            <a href="/">
              <img
                style={{ height: "50px", marginRight: "10px" }}
                src={logo}
                alt=""
              />
            </a>

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
                    history.location.pathname !== "/home"
                      ? history.location.pathname
                      : false
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
                    type="text"
                    placeholder=" "
                    value={inputData}
                    onChange={(evant) =>
                      setInputData(searchBar(evant.target.value))
                    }
                  />
                  {/* <button onClick={() => searchBar(inputData)}>Search</button> */}
                </div>
                <div style={{ marginRight: "15px" }}>
                  <Badge count={cartItems.length}>
                    <Avatar
                      onClick={showDrawer}
                      style={{ backgroundColor: "white", color: "#42a5f5" }}
                      shape="square"
                      size="large"
                      icon={<ShoppingCartOutlined />}
                    />
                  </Badge>
                </div>
                <div
                  onClick={showModal}
                  style={{
                    color: "white",
                    fontSize: "40px",
                    cursor: "pointer",
                    marginRight: "30px",
                  }}
                >
                  <UserOutlined />
                </div>
                <div>
                  <Modal
                    title="Login"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </div>
              </>
            )}
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        title={`ADD CART-Total-${totalPrice}$`}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        zIndex={2000}
      >
        {cartItems.map((item) => (
          <div
            style={{
              border: "2px solid #42a5f5 ",
              textAlign: "center",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src={item.image}
              alt=""
            />
            <small>Price :{item.price}</small>
            <h4>{item.title}</h4>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default Navbar;
