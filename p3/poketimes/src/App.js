import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <div>
            <p>It's working</p>
          </div> */}
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/:post_id" component={Post}></Route>
            {/* <Route path="/posts/:post_id" component={Post}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
