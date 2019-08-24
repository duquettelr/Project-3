import React, { Component } from "react";
import { Button, Modal, Form } from 'react-bootstrap';

export default class AddStudent extends Component {
    state = {
        name: "",
        classroom_number: "",
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    save = () => {
        this.props.onSaveChanges({
            name: this.state.name,
            classroom_number: this.state.classroom_number,
            age: this.state.age,
            date_of_birth: this.state.date_of_birth,
            teacher_name: this.state.teacher_name,
            bcba_name: this.state.bcba_name

        });
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={this.state.name}
                                type="name"
                                placeholder="Enter name"
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Classroom Number</Form.Label>
                            <Form.Control
                                name="classroom_number"
                                value={this.state.classroom_number}
                                type="name"
                                placeholder="Enter classroom number"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                name="age"
                                value={this.state.age}
                                type="name"
                                placeholder="Enter age"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                name="date_of_birth"
                                value={this.state.date_of_birth}
                                type="name"
                                placeholder="Enter date of birth"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control
                                name="teacher_name"
                                value={this.state.teacher_name}
                                type="name"
                                placeholder="Enter teacher name"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>BCBA Name</Form.Label>
                            <Form.Control
                                name="bcba_name"
                                value={this.state.bcba_name}
                                type="name"
                                placeholder="Enter bcba name"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={this.save}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}