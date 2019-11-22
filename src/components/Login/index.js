import React, { Component } from "react";
import "../../css/common.css";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="loginpage">
        <div className="left-container"></div>
        <div className="right-container">
          <div className="formContainer">
          <Form className="form-style" >
            <h5 className="letterName">
              PRODUCTI<span className="brandLastLetter">O</span>
            </h5>
            <label className="appName">
              Welcome back! Please login to your account.
            </label>
            
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="UserName"
              />
              <br/>
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Password"
              />
              <div className="loginhelp">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
            <Link to="/ForgotPass"><label id="forgot-label"> Forgot Password</label></Link> 
              </div>
              <div className="buttonWrapper">
                <button className="button-left" >Login</button >
                <Link to="/Signup"><button  className="button-right"> Sign up</button ></Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
