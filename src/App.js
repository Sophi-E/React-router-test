import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import Item from "./Item";
import Nav from "./Nav";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Protected Routing</h1>
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/item" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}
