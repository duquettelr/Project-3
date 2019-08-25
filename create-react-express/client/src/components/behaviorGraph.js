import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Tracker from "./tracker.js";
import {Bar} from 'react-chartjs-2';
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
const todayMonth = today.getMonth()+1;
const todayDate = today.getDate();
console.log(todayYear);
console.log(todayMonth);
console.log(todayDate);

let hourlyFrequencyValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function createFrequencyValuesDataArray (timeArray, frequencyArray, hourlyFrequencyValues) {
 for (var i = 0; i < 23; i++) {
 for (var j = 0; j < timeArray.length; j++) {
     console.log("hour" + i)
     console.log("time" + timeArray[j])
     if(i === timeArray[j]) {
        hourlyFrequencyValues[i] = hourlyFrequencyValues[i]+frequencyArray[j]
        console.log(hourlyFrequencyValues)
        console.log(frequencyArray)
     }  
    }
}
}



// const regex = /todayYear-.todayMonth-todayDate/
// // const regex = /todayYear/
// console.log(regex);

class BehaviorGraph extends Component {
    state = {
        frequency: [],
        time: []
    };

//group together all same behaviors
//push frequency and time into arrays for each behavior
//graph 

    componentDidMount() {
        axios.get(`/api/Num_Behaviors/${this.props.match.params.id}`)
            .then(response =>
            // console.log(response)
            response.data.forEach(element => {
                timeArray.push(element.createdAt.replace('T', ':').split(':')[1])
                frequencyArray.push(element.num_behavior)
            })
            
        );
            this.setState({
                    time: timeArray,
                    frequency: frequencyArray
                })
            // console.log(timeArray);
            // console.log(frequencyArray);
            // console.log(hourlyFrequencyValues);

            // setTimeout(function(){             
            //     for (var i = 0; i < 23; i++) {
            //     for (var j = 0; j < timeArray.length; j++) {
            //         console.log(i)
            //         console.log(timeArray[j])
            //             if(i === timeArray[j]) {
            //                 console.log("match")
            //                 hourlyFrequencyValues[i] = hourlyFrequencyValues[i]+frequencyArray[j]
            //                 console.log(i)
            //                 console.log(hourlyFrequencyValues[i])
            //                 console.log(frequencyArray)
            //             }  
            //     }
            // } 
            // console.log(hourlyFrequencyValues)
            // }, 5000);


    }
    render() {
console.log(this.state.time)
console.log(this.state.frequency)


const data = {
  labels: this.state.time,
  datasets: [
    {
      label: 'Behavior Frequency',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgb(113, 112, 112)',
      borderColor: 'rgb(42, 39, 39)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(42, 39, 39)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(113, 112, 112)',
      pointHoverBorderColor: 'rgb(42, 39, 39)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: this.state.frequency
    }
  ]
};

console.log(data.labels);
console.log(data.datasets[0].data);
        return (
            <div>
            <Router>
            <Navbar>
                    <Nav className="mr-auto">
                        <Nav.Link href={"/Students/"+this.props.match.params.id}>Tracker</Nav.Link>
                        <Nav.Link href={"/Profile/"+this.props.match.params.id}>Profile</Nav.Link>
                    </Nav>
            </Navbar>
            <Route path="/Students/:id" component={BehaviorTracker} />
            <Route path="/Profile/:id" component={Profile} />
            {/* <Link to={"/Student/"+this.props.match.params.id+"/Data"} variant="light">View Data</Link> */}
            </Router>
            <div className="bChart">
        <h1 className="chartTitle">Frequency of Maladaptive Behaviors</h1>
        <p className="lead">Visualization of the frequency of engaged maladaptive behaviors today.</p>
        <Bar ref="chart" data={data} />
      </div>
      </div>
        )
    }
}

export default withRouter(BehaviorGraph);
