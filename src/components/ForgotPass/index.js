import React, { Component } from "react";
import "../../css/common.css";
import { Button, Form } from "react-bootstrap";
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: ""
    }
  }


  handleForgotPass = e => {
    const { email } = this.state;
    console.log("handleSignup called");
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Email sent to user email Id.")
      })
      .catch(() => { alert("user doesn't exist") })
  }


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    const {
      email,
      error
    } = this.state;
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
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <div className="send-button">
                <button className="button-send" onClick={this.handleForgotPass}>Send Request</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
