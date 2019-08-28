import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import BehaviorTracker from "./behaviorTracker.js";
import BehaviorGraph from "./behaviorGraph.js";



class Profile extends Component {
    state = {
        name: "",
        classroom_number: "",
        age: "",
        date_of_birth: "",
        teacher_name: "",
        bcba_name: "",
        image: ""
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
                 bcba_name: results.data.bcba_name,
                 image: results.data.image
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
                        <Nav.Link href={"/Students/"+this.props.match.params.id}>Tracker</Nav.Link>
                        </Nav>
            </Navbar>
            <Route exact path="/Student/:id/Data" component={BehaviorGraph} />
            <Route path="/Students/:id" component={BehaviorTracker} />
            {/* <Link to={"/Student/"+this.props.match.params.id+"/Data"} variant="light">View Data</Link> */}
            </Router>
               <div className="container profileContainer">
               <h1 className="profileTitle">{this.state.name}'s Profile</h1>
               <div className="row">
               <div className="col-md-6">
               <img src={this.state.image} className="profilePhoto" width="300" height="300"></img>
               </div>
               <div className="col-md-6">
                <strong className="profileHeaders">Age: </strong><span className="profileData">{this.state.age}</span>
                <br></br>
               <strong className="profileHeaders">Date of Birth: </strong><span className="profileData">{this.state.date_of_birth}</span>
               <br></br>
               <strong className="profileHeaders">Classroom Number: </strong><span className="profileData">{this.state.classroom_number}</span>
               <br></br>
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
