import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button, Navbar, Nav } from "react-bootstrap";
import AddBehavior from "./addBehavior";
import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import Tracker from "./tracker.js";
import BehaviorGraph from "./behaviorGraph.js";
import Profile from "./profile.js";

class BehaviorTracker extends Component {
  state = {
    behaviors: [],
    show: false,
    behaviorValue: 0,
    user: ""
  };

  showModal = () => {
    this.setState({ show: !this.state.show });
  };
  handleClose = () => {
    this.setState({ show: !this.state.show });
    window.location.reload(true);
  };

  saveChanges = behavior => {
    axios
      .post(`/api/Behavior/${this.props.match.params.id}`, behavior)
      .then(function(results) {
        console.log(results);
      });
  };

  componentDidMount() {
    axios.get(`/api/oneUser/${this.props.match.params.id}`).then(results => {
      console.log(results.data);
      this.setState({
        user: results.data.UserId
      });
    });

    axios.get(`/api/Behaviors/${this.props.match.params.id}`).then(results => {
      this.setState({
        behaviors: results.data
      });

      console.log(results);
      if (typeof results.data[0] != "undefined") {
        axios.get(`/api/oneUser/${results.data[0].StudentId}`).then(results => {
          console.log(results.data);
          this.setState({
            user: results.data.UserId
          });
        });
      }
    });
  }

  // sendData = (e) => {
  //     console.log(this.props.id)
  //     // this.setState({behaviorValue: })
  //     //     axios.post(`/api/num_behavior/${this.props.id}`, {num_behavior: this.state.behaviorValue}).then(results => {
  //     //     console.log(results)
  //     // });
  // }

  addBehavior = e => {
    console.log("add");
  };

  handleBehaviorValueChange = behaviorValue => {
    console.log(behaviorValue);
    this.setState({ behaviorValue });
  };

  render() {
    console.log("is the student ID in here" + this.props);
    console.log(this.state.behaviorValue);

    return (
      <div>
        <Router>
          <Navbar>
            <Nav className="mr-auto">
              <Nav.Link
                href={"/Student/" + this.props.match.params.id + "/Data"}
              >
                View Data
              </Nav.Link>
              <Nav.Link href={"/Profile/" + this.props.match.params.id}>
                Profile
              </Nav.Link>
              <Nav.Link href={"/List/" + this.state.user}>
                Student List
              </Nav.Link>
            </Nav>
          </Navbar>
          <Route exact path="/Student/:id/Data" component={BehaviorGraph} />
          <Route path="/Profile/:id" component={Profile} />
          {/* <Link to={"/Student/"+this.props.match.params.id+"/Data"} variant="light">View Data</Link> */}
        </Router>
        <Button variant="secondary" size="xxl" onClick={this.showModal}>
          Add Behavior
        </Button>
        <AddBehavior
          show={this.state.show}
          handleClose={this.handleClose}
          onHide={this.handleClose}
          onSaveChanges={this.saveChanges}
        />
        <div className="container behaviorTracker">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-4">Tracker</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="lead">
                Click + and - to track behavior frequency. Click Import to save
                behavior data.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                {this.state.behaviors.map(result => (
                  <Tracker
                    key={result.id}
                    id={result.id}
                    name={result.type}
                    selected={true}
                    onBehaviorValueChange={this.handleBehaviorValueChange}
                  ></Tracker>
                ))}
              </ul>
              {/* <Button onClick={this.send}>Import Data</Button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BehaviorTracker);
