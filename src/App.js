import Home from "./Home/Home";
import Men from "./Home/Men";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Women from "./Home/Women";
import Navbar from "./Home/Navbar";
import NotFound from "./Home/NotFound";
import Productdetails from "./Home/Productdetails";
import Login from "./LogForm/Login";

function App() {
  return (
    <div>
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

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
