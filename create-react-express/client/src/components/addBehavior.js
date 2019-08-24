import React, { Component } from "react";
import { Button, Modal, Form } from 'react-bootstrap';

export default class AddBehavior extends Component {
    state = {
        type: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    save = () => {
        this.props.onSaveChanges({
            type: this.state.type

        });
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Behavior to Tracker</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Behavior</Form.Label>
                            <Form.Control
                                name="type"
                                value={this.state.type}
                                type="name"
                                placeholder="Enter Behavior"
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