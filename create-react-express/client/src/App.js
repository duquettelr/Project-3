import React, { Component } from "react";
import axios from "axios";
import StudentList from "./components/studentList";
import AddStudent from "./components/addStudent";
import BehaviorTracker from "./components/behaviorTracker.js";
import BehaviorGraph from "./components/behaviorGraph"
import { Button, Modal, Form, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login"
import "./index.css";

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar variant="light" bg="light">
                    <Navbar.Brand href="#home">Fast-Track</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/List">Student List</Nav.Link>
                        <Nav.Link href="/">Login</Nav.Link>
                        </Nav>
                    </Navbar>
                 <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/List" component={StudentList} />
                    <Route path="/Data" component={BehaviorGraph} />
                    <Route path="/Students/:id" component={BehaviorTracker} />
                    <Route exact path="/Student/:id/Data" component={BehaviorGraph} />
                </Switch>
                </Router>
                {/* <React.Fragment>
                    <Button onClick={this.showModal}>Add Student</Button>
                    <AddStudent
                        show={this.state.show}
                        handleClose={this.handleClose}
                        onHide={this.handleClose}
                        onSaveChanges={this.saveChanges}
                    />

                </React.Fragment> */}
                {/* <StudentList></StudentList> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
