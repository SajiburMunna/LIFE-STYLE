import React, { useLayoutEffect } from "react";
import Home from "../src/components/Home/Home";
import Men from "../src/components/Men/Men";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Women from "./components/Women/Women";
import Navbar from "./components/NavBar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Productdetails from "./components/Products/Productdetails";

import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CartCheckOut/CheckOut";
import SignIn from "./LogForm/SignIn";

import "./LogForm/Form.css";
import Footer from "../src/Footer/Footer";

//Tracking Scroll Position With React Hooks
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Router>
        <ScrollToTop>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/men">
              <Men></Men>
            </Route>
            <Route path="/women">
              <Women></Women>
            </Route>
            <Route path="/productdetails/:id">
              <Productdetails> </Productdetails>
            </Route>
            <Route path="/log">
              <div className="back">
                <SignIn></SignIn>
                <div style={{ marginTop: "70px" }}>
                  <Footer></Footer>
                </div>
              </div>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>

            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
