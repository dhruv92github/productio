import React, { Component } from "react";
import "../../css/common.css";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import firebase from 'firebase';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: ""
    }
  }

  handleSignIn = e => {
    console.log("handleSigin called");
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username + "..." + password)
    // firebase.database().ref(`users/${username}`)
    //   .once('value', (snapshot) => {
    //     if (snapshot.exists()) {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        alert("User login successfully");
        console.log("login success");
      })
      .catch((error) => {
        console.log(error);
      });
    // } else {
    //   console.log('no users with that name');
    // }
    // });

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
      username,
      password,
      error
    } = this.state;
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
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <div className="loginhelp">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to="/ForgotPass"><label id="forgot-label"> Forgot Password</label></Link>
              </div>
              <div className="buttonWrapper">
                <button className="button-left" onClick={this.handleSignIn}>Login</button >
                <Link to="/Signup"><button className="button-right"> Sign up</button ></Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
