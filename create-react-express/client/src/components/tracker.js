import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
import {withRouter } from "react-router-dom";


class Tracker extends Component {
    state = {
        behaviorValue: 0,
        show: false
    };


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    increase = (e) => {
        const newValue = this.state.behaviorValue + 1;

        this.setState({
            behaviorValue: newValue
        })

        this.props.onBehaviorValueChange(newValue);
    }

    decrease = (e) => {
        const newValue = this.state.behaviorValue - 1;

        this.setState({
            behaviorValue: newValue 
        })

        this.props.onBehaviorValueChange(newValue);
    }

    sendData = () => {
        // console.log(this.props.id)
             axios.post(`/api/num_behavior/${this.props.id}/${this.props.match.params.id}`, {num_behavior: this.state.behaviorValue}).then(results => {
            console.log(results)
        });

        this.setState({
            behaviorValue: 0
        })
    }

    render(props) {
        console.log(this.props)

        return (
            <div>
                 <li className="track list-group-item behavior" 
                    > {this.props.name} <span className="trackButtons">
                        <Button variant="warning" size="lg" className="calcButton" onClick={ () => this.increase()}>   +   </Button>
                        <Button variant="warning" size="lg" className="calcButton" onClick={ () => this.decrease()}>   -   </Button>
                         </span><span 
                            name="behaviorValue"
                            className="text-right number"
                            value={this.state.behaviorValue}
                            onChange={this.handleChange}
                            type="name"
                        >{this.state.behaviorValue}</span>
                    </li>
                    <Button variant="secondary" onClick={this.sendData}>Import Data</Button>
            </div>
        )
    }
}

export default withRouter(Tracker);
