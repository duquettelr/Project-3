import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
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
        console.log(e)
        this.setState({
            behaviorValue: this.state.behaviorValue + 1
        })
    }

    decrease = (e) => {
        this.setState({
            behaviorValue: this.state.behaviorValue - 1
        })
    }


    render(props) {
        console.log(this.props)

        return (
            <div>
                 <li className="list-group-item" 
                    > {this.props.name}
                        <Button onClick={ () => this.increase({id:1})}>+</Button>
                        <Button onClick={ () => this.decrease({id:1})}>-</Button>
                         <p 
                            name="behaviorValue"
                            className="text-right"
                            value={this.state.behaviorValue}
                            onChange={this.handleChange}
                            type="name"
                        >{this.state.behaviorValue}</p>
                    </li>
            </div>
        )
    }
}

export default withRouter(Tracker);
