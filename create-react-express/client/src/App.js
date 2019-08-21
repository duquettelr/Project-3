import React, { Component } from "react";
import axios from "axios";
import StudentList from "./components/studentList";
import AddStudent from "./components/addStudent";
import BehaviorTracker from "./components/behaviorTracker.js";
import { Button, Modal, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login"

class App extends Component {
    // state = {
    //     show: false
    // }

    // showModal = () => {
    //     this.setState({ show: !this.state.show });
    // }
    // handleClose = () => {
    //     this.setState({ show: !this.state.show });
    // };

    // saveChanges = (student) => {
    //     console.log(student);
    //     axios.post("/api/Student/1", student).then(function (results) {
    //         console.log(results)
    //     });
    // }

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
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Fast-Track</a>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><Link to="/">Login</Link></button>
                    </nav>
                 <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/List" component={StudentList} />
                    <Route path="/Students/:id" component={BehaviorTracker} />
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
