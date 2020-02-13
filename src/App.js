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
        <h1>Id routing</h1>
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}
