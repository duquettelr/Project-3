import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
import {withRouter } from "react-router-dom";
import Tracker from "./tracker.js";



class BehaviorTracker extends Component {
    state = {
        behaviors: [],
        show: false
    };


    showModal = () => {
        this.setState({ show: !this.state.show });
    }
    handleClose = () => {
        this.setState({ show: !this.state.show });
    };

    saveChanges = (behavior) => {
        axios.post(`/api/Behavior/${this.props.match.params.id}`, behavior).then(function (results) {
            console.log(results)
        });
    }

    componentDidMount() {
        axios.get(`/api/Behaviors/${this.props.match.params.id}`)
            .then(results => 
                this.setState({
                 behaviors: results.data
            }));
    }

    sendData = (e) => {
        console.log("send")
    }

    addBehavior = (e) => {
        console.log("add")
    }

    render() {

        console.log(this.props);
        console.log(this.state.behaviorValue);

        return (
            <div>
                <Button onClick={this.showModal}>Add Behavior</Button>
                <AddBehavior
                    show={this.state.show}
                    handleClose={this.handleClose}
                    onHide={this.handleClose}
                    onSaveChanges={this.saveChanges}
                />
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
                                    <Tracker key={result.id} id={result.id} name={result.type} value={this.state.behaviorValue} selected={true}></Tracker>
                                ))}
                            </ul>
                            <Button onClick={this.sendData}>Import Data</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BehaviorTracker);
