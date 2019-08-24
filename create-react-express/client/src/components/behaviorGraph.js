import React, { Component } from "react";
import StudentList from "./studentList";
import { Modal, Button } from 'react-bootstrap';
import AddBehavior from "./addBehavior";
import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';
import {withRouter } from "react-router-dom";
import Tracker from "./tracker.js";
import {XYPlot, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';



class BehaviorGraph extends Component {
    state = {

    };


    componentDidMount() {

    }



    render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
        return (
            <div>
      <div className="App">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
      </div>
            </div>
        )
    }
}

export default withRouter(BehaviorGraph);
