import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/common.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="Appbackground"></div>
        <div className="loginContainer">
          <div className="formContainer">
            <h5 className="letterName">
              PRODUCTI<span className="brandLastLetter">O</span>
            </h5>
            <label className="appName">
              Please complete to create your account.
            </label>
            <Form className="form-style">
              <Form.Row>
                <Col>
                  <Form.Control className="inputTag" placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control className="inputTag" placeholder="Last name" />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Col xs={6}>
                  <Form.Control
                    className="inputTag"
                    placeholder="Company Name"
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="UserName"
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Email"
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Password"
              />
              <br />
              <Form.Control
                className="inputTag"
                type="text"
                placeholder="Confirm Password"
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
                <button className="button-send">Sign up</button>
              </div>
              <div>
               <Link to ="/" >
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
