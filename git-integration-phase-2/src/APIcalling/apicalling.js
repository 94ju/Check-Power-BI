import React, { Component } from 'react';


class Api extends Component{
    constructor(params) {
        super();
        console.log('This is from Api calling constructor');
    }
    componentDidCatch(){
        console.log('This is from componentDidCatch Api');
      }
      componentWillMount(){
        console.log("This is from componentwillMount Api");
      }
      componentDidMount(){
        console.log('This is from componentDidMount Api ')
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