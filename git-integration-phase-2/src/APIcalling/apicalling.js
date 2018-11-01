import React, { Component } from 'react';


class Api extends Component{
    constructor(params) {
        super();
        console.log('This is from Api calling constructor');
    }

   
      
    componentDidMount(){
        console.log('This is from componentDidMount Api ')
        this.fetchData();
    }
    render(){
        return(
            <div>
                <h1>This is from Api Calling</h1>
            </div>
        )
    }

}

export default Api;