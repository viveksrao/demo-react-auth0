import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </>
    );
  }
}

export default App;
