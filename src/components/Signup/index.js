import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/common.css";

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
      error: null
    };
  }
  handleSignup = e => {
    console.log("handleSignup called")
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
      error
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
            <Form className="form-style">
              <h5 className="letterName">
                PRODUCTI<span className="brandLastLetter">O</span>
              </h5>
              <label className="appName">
                Please complete to create your account.
              </label>

              <Form.Row>
                <Col>
                  <Form.Control
                    className="inputTag"
                    placeholder="First name"
                    value={firstName}
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="inputTag"
                    placeholder="Last name"
                    value={lastName}
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Col xs={12}>
                  <Form.Control
                    className="inputTag"
                    placeholder="Company Name"
                    name="company"
                    value={company}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Row>
              <br />
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
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.handleChange}
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Confirm Password"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.handleChange}
              />
              <div className="loginhelp">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree with terms and conditions"
                  />
                </Form.Group>
              </div>
              <div className="send-button">
                <button
                  className="button-send"
                  disabled={isInvalid}
                  onClick={this.handleSignup}
                >
                  Sign up
                </button>
              </div>
              {error && <p>{error.message}</p>}
              <div>
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
