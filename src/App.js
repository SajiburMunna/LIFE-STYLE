import Home from "./Home/Home";
import Men from "./Home/Men";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Women from "./Home/Women";
import Navbar from "./Home/Navbar";
import NotFound from "./Home/NotFound";
import Productdetails from "./Home/Productdetails";
import Login from "./LogForm/Login";
import Cart from "./Home/Cart";
import CheckOut from "./Home/CheckOut";

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
            <Login></Login>
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
