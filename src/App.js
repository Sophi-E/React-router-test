import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import about from "./about";
import shop from "./shop";
import item from "./item";
import Nav from "./Nav";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <div className="App">
      <h1>Protected Routing</h1>
      <Nav />
    </div>
  );
}
