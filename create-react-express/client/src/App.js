import React, { Component } from "react";
import axios from "axios";
import StudentList from "./components/studentList";
import AddStudent from "./components/addStudent";
import { Button, Modal, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    state = {
        show: false
    }

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

    //   componentDidMount() {
    //     axios.get("/api/restaurant").then(results => {
    //       console.log(results);
    //       this.setState({
    //         restaurants: results.data
    //       })
    //     });
    //   }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Fast-Track</a>
                </nav>
                <React.Fragment>
                    <Button onClick={this.showModal}>Add Student</Button>
                    <AddStudent
                        show={this.state.show}
                        handleClose={this.handleClose}
                        onHide={this.handleClose}
                        onSaveChanges={this.saveChanges}
                    />

                </React.Fragment>
                <StudentList></StudentList>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <AddStudent
                        // name="studentName"
                        // value={this.state.studentName}
                        // onChange={this.handleInputChange}
                        /> */}
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
