import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';


const userTemp = 1;
class StudentList extends Component {
    state = {
        students: []
    };

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
                        <div className="col-md-12">
                            <h1 className="display-4">Student List</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="lead">Click a student name to view their profile.</p>
                        </div>
                    </div>

                    <div className="card" >
                        <div className="content">
                            <ul className="list-group">
                                <li className="list-group-item">Test
                                    </li>
                                {this.state.students.map(result => (
                                    <li className="list-group-item" key={result.id}>{result.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentList;
