import React, { Component } from "react";
import "../../css/common.css";
import { Button, Form } from "react-bootstrap";
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: "",
      validated:false
    }
  }


  handleForgotPass = e => {
    const { email } = this.state;
    console.log("handleSignup called");
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      console.log("inside")
    e.preventDefault();
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Email sent to user email Id.")
      })
      .catch(() => { alert("user doesn't exist") })
    }
    this.setState({
      validated: true
    });
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
      error,
      validated
    } = this.state;
    return (
      <div className="forgetPass">
        <div className="left-container"></div>
        <div className="right-container">
          <div className="formContainer">
          <Form
              noValidate
              className="form-style"
              validated={validated}
              onSubmit={this.handleForgotPass}
             
            >
              <h5 className="letterName">
                PRODUCTI<span className="brandLastLetter">O</span>
              </h5>
              <label className="appName">
                Enter your email and we send you a password reset link.
            </label>
            <br/>
            <Form.Group>
              <Form.Control
                className="inputTag"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
               <Form.Control.Feedback type="invalid">
                    Email Id is required
                  </Form.Control.Feedback>
              
              </Form.Group>
              <div className="send-button">
                <button type="submit" className="button-send" >Send Request</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
