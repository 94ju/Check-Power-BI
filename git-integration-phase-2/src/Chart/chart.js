import React, { Component } from 'react';


class Chart extends Component{
    constructor(params) {
        super();
        console.log('This is from Chart constructor');
    }
    render(){
        return(
            <div>
                <h1>This is from Chart </h1>
            </div>
        )
    }

}

export default Chart;