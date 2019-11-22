/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from './components/Signup';
import ForgotPass from "./components/ForgotPass";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/ForgotPass" component={ForgotPass} />
        </div>
      </Router>
    );
  }
}

export default App;
