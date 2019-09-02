import axios from "axios";
import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  register = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/register", {
        email: this.state.email,
        password: this.state.password
      })
      .then(this.props.history.push(`/`));
  };

  render() {
    return (
      <div>
        <h1 className="title">Fast-Track</h1>
        <div className="loginCard">
          <p className="appDesc">
            Get your students on the fast track to succesful behavior management
            with our behavior tracking software. Fast-Track allows behavioral
            analysts, paraprofessionals and support staff to track behaviors
            quickly, view daily behavior trends, and export student's data into
            excel spreadsheet for data manipulation and analyzation. Register to
            start your behavior management journey!
          </p>
          <h3 className="login">Register</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={this.state.email}
                type="name"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={this.state.password}
                // type="name"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" onClick={this.register}>
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
