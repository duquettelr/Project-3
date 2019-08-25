import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Tracker from "./tracker.js";
import BehaviorGraph from "./behaviorGraph.js";



class Profile extends Component {
    state = {
        name: "",
        classroom_number: "",
        age: "",
        date_of_birth: "",
        teacher_name: "",
        bcba_name: ""
    };

    componentDidMount() {
        axios.get(`/api/oneStudent/${this.props.match.params.id}`)
            .then(results => 
                this.setState({
                 name: results.data.name,
                 classroom_number: results.data.classroom_number,
                 age: results.data.age,
                 date_of_birth: results.data.date_of_birth,
                 teacher_name: results.data.teacher_name,
                 bcba_name: results.data.bcba_name
            })
            );
    }


    render() {
console.log(this.state);
        return (
            <div>
            <Router>
            <Navbar>
                    <Nav className="mr-auto">
                        <Nav.Link href={"/Student/"+this.props.match.params.id+"/Data"}>View Data</Nav.Link>
                        </Nav>
            </Navbar>
            <Route exact path="/Student/:id/Data" component={BehaviorGraph} />
            {/* <Link to={"/Student/"+this.props.match.params.id+"/Data"} variant="light">View Data</Link> */}
            </Router>
               <div className="container profileContainer">
               <h1 className="profileTitle">{this.state.name}'s Profile</h1>
               <img src="data:image/jpeg;base64,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" alt="Girl in a jacket"></img>
               <div className="row">
               <div className="col-md-6">
                <strong className="profileHeaders">Age: </strong><span className="profileData">{this.state.age}</span>
                <br></br>
               <strong className="profileHeaders">Date of Birth: </strong><span className="profileData">{this.state.date_of_birth}</span>
               <br></br>
               <strong className="profileHeaders">Classroom Number: </strong><span className="profileData">{this.state.classroom_number}</span>
               </div>
               <div className="col-md-6">
                <strong className="profileHeaders">Teacher Name: </strong><span className="profileData">{this.state.teacher_name}</span>
              <br></br>
               <strong className="profileHeaders">Behavioral Analyst: </strong><span className="profileData">{this.state.bcba_name}</span>
               </div>
               </div>
               </div>
            </div>
        )
    }
}

export default withRouter(Profile);
