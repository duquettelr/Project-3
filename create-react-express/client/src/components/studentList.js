import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
// import AddStudent from "../components/addStudent";

const userTemp = 1;
class StudentList extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        axios.get(`/api/Students/${userTemp}`)
            .then(response =>
                this.setState({
                    students: response.data
                }));
    }

    renderAddStudent() {

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Student List</h1>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-dark float-right" onClick={this.renderAddStudent}>ADD STUDENT</button>
                        </div>
                    </div>


                    <div className="card" >
                        <div className="content">
                            <ul className="list-group">
                                {this.state.students.map(result => (
                                    <li className="list-group-item" key={result.id}>{result.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-dark">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog> */}
            </div>
        )
    }
}

export default StudentList;
