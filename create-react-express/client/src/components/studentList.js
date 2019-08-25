import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import BehaviorTracker from "./behaviorTracker";
import AddStudent from "./addStudent"
import App from "../App"

const userTemp = 1;
class StudentList extends Component {
    //     state = {
    //     show: false
    // }

    showModal = () => {
        this.setState({ show: !this.state.show });
    }
    handleClose = () => {
        this.setState({ show: !this.state.show });
    };

    saveChanges = (student) => {
        console.log(student);
        axios.post("/api/Student/1", student).then(function (results) {
            console.log(results)
        });
    }
    state = {
        students: [],
        show: false,
        behaviors: []
    };

    componentDidMount() {
        axios.get(`/api/Students/${userTemp}`)
            .then(response =>
                this.setState({
                    students: response.data
                }));
    }


    displayBehaviors = ()=> {
        console.log(this.props.id)
        // axios.get(`/api/Behaviors/${this.id}`)
        //     .then(function (results) {
        //         console.log(results)
        //         // this.setState({ behaviors: results.data });
        //     })
        this.props.history.push(`/BehaviorTracker/${this.id}`)
    }

    // showModal = () => {
    //     this.setState({ show: !this.state.show });
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <React.Fragment>
                    <Button variant="secondary" onClick={this.showModal}>Add Student</Button>
                    <AddStudent
                        show={this.state.show}
                        handleClose={this.handleClose}
                        onHide={this.handleClose}
                        onSaveChanges={this.saveChanges}
                    />

                </React.Fragment>
                <div className="container studentList">
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
                                            <Link to={"/Students/"+result.id} id={result.id}>{result.name}</Link>
                                        </li>
                                    ))}
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
