import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BehaviorTracker from "./behaviorTracker";

const userTemp = 1;
class StudentList extends Component {

    state = {
        students: [],
        behaviors: [
            {
                "id": 1,
                "type": "Physical Aggression",
                "createdAt": "2019-08-18T14:51:35.000Z",
                "updatedAt": "2019-08-18T14:51:35.000Z",
                "StudentId": 1
            },
            {
                "id": 2,
                "type": "Property Destruction",
                "createdAt": "2019-08-18T14:54:10.000Z",
                "updatedAt": "2019-08-18T14:54:10.000Z",
                "StudentId": 1
            },
            {
                "id": 3,
                "type": "Pica",
                "createdAt": "2019-08-18T14:56:15.000Z",
                "updatedAt": "2019-08-18T14:56:15.000Z",
                "StudentId": 1
            },
            {
                "id": 4,
                "type": "Self-harm",
                "createdAt": "2019-08-18T14:58:20.000Z",
                "updatedAt": "2019-08-18T14:58:20.000Z",
                "StudentId": 1
            }
        ]
    };

    componentDidMount() {
        axios.get(`/api/Students/${userTemp}`)
            .then(response =>
                this.setState({
                    students: response.data
                }));
    }


    displayBehaviors() {
        console.log(this.id)
        axios.get(`/api/Behaviors/${this.id}`)
            .then(function (results) {
                console.log(results)
                // this.setState({ behaviors: results.data });
            })
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
                            <p className="lead">Click a student name to access their tracker.</p>
                        </div>
                    </div>

                    <div className="card" >
                        <div className="content">
                            <ul className="list-group">
                                <Router>
                                    {/* <li className="list-group-item">Test
                                    </li> */}
                                    {this.state.students.map(result => (
                                        <li className="list-group-item" key={result.id}>
                                            <Link to="/BehaviorTracker/" onClick={this.displayBehaviors} id={result.id}>{result.name}</Link>
                                        </li>
                                    ))}
                                    <Route path="/BehaviorTracker/" component={BehaviorTracker} />
                                </Router>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentList;
