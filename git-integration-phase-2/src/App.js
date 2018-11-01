import React, { Component } from 'react';
import Api from './APIcalling/apicalling';
import Chart from './Chart/chart';

class App extends Component {
  constructor(){
    super();
    console.log('This is from constructor');
  }
  componentDidCatch(){
    console.log('This is from componentDidCatch ');
  }
  componentWillMount(){
    console.log("This is from componentwillMount");
  }
  componentDidMount(){
    console.log('This is from componentDidMount')
  }
  
  render() {
    console.log('This is from Render')
    return (
      <div>
          <Chart/>
          <Api/>
       
  
      </div>
    );
  }
}

export default App;
