import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


class Chart extends Component{
    constructor() {
        super();
        console.log('This is from Chart constructor');
    }
    render(){
               return(
            <div className="chart">
                <h1>This is from Chart </h1>
                <Bar/>
            
            </div>
        )
    }

}

export default Chart;