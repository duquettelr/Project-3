//to do:
//log in page / authentication
//get router to work properly so student list is hidden
//get the api call to retrieve behaviors to add the behaviors to the state to be used for display
//figure out how to seperate out behavior numbers for the tracker
//figure out how to access the student ID to make the post request for numbers of behaviors
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
        console.log("logging in")
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
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
                            type="name"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

