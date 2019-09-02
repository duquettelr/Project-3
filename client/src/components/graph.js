import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button, Navbar, Nav, Table } from "react-bootstrap";
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
import { Bar } from "react-chartjs-2";
import BehaviorTracker from "./behaviorTracker";
import Profile from "./profile";

//make sequelize time stamp accurate (subtract 5 from the time, if time is === 5 set to 24, if === 4 set to 23, 3 - 22, 2- 21)
//need to get current date, find all behavior frequency data for current date,
//add all behavior frequency data for same hours and push into array
//graph array
const timeArray = [];
const frequencyArray = [];
const today = new Date();
console.log("today is" + today);
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();
console.log(todayYear);
console.log(todayMonth);
console.log(todayDate);

const numBeh = [];

class Graph extends Component {
  state = {
    frequency: [],
    time: [],
    frequencyData: [],
    tableData: [],
    barData: {},
    numBehaviors: []
  };

  //get all behavior IDs
  //map & filter

  componentDidMount() {
    axios.get(`/api/Behaviors/${this.props.match.params.id}`).then(response =>
      this.setState({
        numBehaviors: response.data
      })
    );

    axios.get(`/api/Num_Behaviors/${this.props.match.params.id}`).then(
      response => {
        console.log(response);
        response.data.forEach(element => {
          // dataTest.push({x: element.date, y: element.num_behavior})
          timeArray.push(element.date + ":00");
          frequencyArray.push(element.num_behavior);
        });

        this.setState({
          frequencyData: response.data,
          barData: {
            labels: timeArray,
            datasets: [
              {
                label: "Behavior Frequency",
                fill: true,
                backgroundColor: "rgb(113, 112, 112)",
                borderColor: "rgb(42, 39, 39)",
                data: frequencyArray,
                options: {}
              }
            ]
          }
        });
      }
      // console.log(response)
    );

    axios
      .get(`/api/Num_Behaviors_Join/${this.props.match.params.id}`)
      .then(response =>
        this.setState({
          tableData: response.data
        })
      );
  }

  render(props) {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 bChart">
              <h1 className="chartTitle">Frequency of Maladaptive Behaviors</h1>
              <p className="lead">
                Frequency of engaged maladaptive behaviors today.
              </p>
              <Bar ref="chart" data={this.state.barData} />
            </div>
            <div className="col-md-6 bChart">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Behavior Type</th>
                    <th>Frequency</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map(result => (
                    <tr>
                      <td>{result.type}</td>
                      <td>{result.num_behavior}</td>
                      <td>{result.date}:00</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Graph);
