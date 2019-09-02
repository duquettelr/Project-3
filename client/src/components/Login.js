import axios from "axios";
import React, { Component } from "react";
import { Button, Modal, Form, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Login extends Component {
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

  login = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        axios.get(`api/getUser/${this.state.email}`).then(res => {
          console.log(res);
          this.setState({
            id: res.data.id
          });
          this.props.history.push(`/List/${res.data.id}`);
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="title">Fast-Track</h1>
        <div className="loginCard">
          <h3 className="login">Login</h3>
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
            <Button variant="secondary" type="submit" onClick={this.login}>
              Login
            </Button>
          </Form>
          <Nav className="mr-auto">New user? Click Register to sign up!</Nav>
        </div>
      </div>
    );
  }
}
