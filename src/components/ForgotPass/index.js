import React, { Component } from "react";
import "../../css/common.css";
import { Button, Form } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="forgetPass">
         <div className="left-container"></div>
         <div className="right-container">
          <div className="formContainer">
          <Form className="form-style">
            <h5 className="letterName">
              PRODUCTI<span className="brandLastLetter">O</span>
            </h5>
            <label className="appName">
              Enter your email and we send you a password reset link.
            </label>
          
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Email"
              />
              <div className="send-button">
                <button className="button-send">Send Request</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
