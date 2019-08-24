import axios from "axios";
import React, { Component } from "react";
import { Button, Modal, Form } from 'react-bootstrap';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    login = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/User', {
            email: this.state.email,
            password: this.state.password
        }).then(res => localStorage.setItem('cool-jwt', res.data));
    }

    render() {
        return (
            <div>
            <h1 className="title">Fast-Track</h1>
            <div className="loginCard">
                <h3>Login</h3>
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
            </div>
            </div>
        );
    }
}

