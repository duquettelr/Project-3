import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button } from 'react-bootstrap';
// import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class BehaviorTracker extends Component {
    state = {
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
            // {
            //     "id": 3,
            //     "type": "Pica",
            //     "createdAt": "2019-08-18T14:56:15.000Z",
            //     "updatedAt": "2019-08-18T14:56:15.000Z",
            //     "StudentId": 1
            // },
            {
                "id": 4,
                "type": "Self-harm",
                "createdAt": "2019-08-18T14:58:20.000Z",
                "updatedAt": "2019-08-18T14:58:20.000Z",
                "StudentId": 1
            }
        ],
        behaviorValue: 0
    };

    // componentDidMount() {
    //     axios.get(`/api/Students/${userTemp}`)
    //         .then(response =>
    //             this.setState({
    //                 students: response.data
    //             }));
    // }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    increase = () => {
        this.state.behaviorValue++
        console.log(this.state.behaviorValue)
    }

    decrease = () => {
        this.state.behaviorValue--
        console.log(this.state.behaviorValue)
    }

    render() {

        console.log(this.state.behaviorValue);

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Tracker</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                {this.state.behaviors.map(result => (
                                    <li className="list-group-item" key={result.id}>{result.type}
                                        <Button onClick={this.increase}>+</Button>
                                        <Button onClick={this.decrease}>-</Button>
                                        <p id={result.id}
                                            name="behaviorValue"
                                            className="text-right"
                                            value={this.state.behaviorValue}
                                            onChange={this.handleChange}
                                            type="name"
                                        >{this.state.behaviorValue}</p>
                                    </li>
                                ))}
                            </ul>
                            <Button>Import Data</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BehaviorTracker;
