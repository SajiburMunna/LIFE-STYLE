import Home from "./Home/Home";
import Men from "./Home/Men";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Women from "./Home/Women";
import Navbar from "./Home/Navbar";
import NotFound from "./Home/NotFound";
import Productdetails from "./Home/Productdetails";

import Cart from "./Home/Cart";
import CheckOut from "./Home/CheckOut";
import SignIn from "./LogForm/SignIn";

import "./LogForm/Form.css";
import Footer from "../src/Footer/Footer";

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
