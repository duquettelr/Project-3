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
          <h3>Register</h3>
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
