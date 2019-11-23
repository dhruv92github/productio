import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/common.css";
import firebase from "firebase";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      company: "",
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      role: "Admin",
      error: null,
      validated: false
    };
  }
  handleSignup = e => {
    console.log("handleSignup called");
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      console.log("inner called");
      const {
        firstName,
        lastName,
        email,
        company,
        username,
        passwordOne,
        role
      } = this.state;
      firebase
        .database()
        .ref(`users/${username}`)
        .limitToFirst(1)
        .once("value")
        .then(snapshot => {
          if (snapshot.exists()) {
            console.log("user already exist");
            return false;
          }
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, passwordOne)
            .then(u => {
              firebase
                .database()
                .ref(`users/${username}`)
                .set({ firstName, lastName, email, company, role })
                .then(() => {
                  alert("User registered successfully");
                  console.log("success 1");
                })
                .then(() => {
                  console.log("success 2");
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log(error);
            });
        });
    }
    this.setState({
      validated: true
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    const {
      firstName,
      lastName,
      company,
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      validated
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    console.log(this.state);
    return (
      <div className="signUp">
        <div className="left-container"></div>
        <div className="right-container">
          <div className="formContainer">
            <Form
              noValidate
              className="form-style"
              validated={validated}
              onSubmit={this.handleSignup}
            >
              <h5 className="letterName">
                PRODUCTI<span className="brandLastLetter">O</span>
              </h5>
              <label className="appName">
                Please complete to create your account.
              </label>
              <br />
              <Form.Row>
                <Col>
                  <Form.Control
                    className="inputTag"
                    placeholder="First name"
                    value={firstName}
                    name="firstName"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    First name is required
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Control
                    className="inputTag"
                    placeholder="Last name"
                    value={lastName}
                    name="lastName"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Last name is required
                  </Form.Control.Feedback>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Col xs={6}>
                  <Form.Control
                    className="inputTag"
                    placeholder="Company Name"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Company is required
                  </Form.Control.Feedback>
                </Col>
              </Form.Row>
              <br />
              <Form.Group>
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
              />
         <Form.Control.Feedback type="invalid">
                 User name is required
                </Form.Control.Feedback>
        </Form.Group>
              <br />
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
                  Please enter a valid Email Id
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group>
              <Form.Control
                className="inputTag"
                type="password"
                placeholder="Password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose password
              </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group>
              <Form.Control
                className="inputTag"
                type="password"
                placeholder="Confirm Password"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please re-enter password
              </Form.Control.Feedback>
              </Form.Group>
              <div className="loginhelp">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="I agree with terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
              </div>
              <div className="send-button">
                <button type="submit" className="button-send">
                  Sign up
                </button>
              </div>
              {error && <p>{error.message}</p>}
              <div className="signin-label">
                <Link to="/">
                  <span>Already have an account Sign In</span>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
