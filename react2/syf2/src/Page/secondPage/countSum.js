import React, { Component } from 'react';
import './TwoPage.css';

class Counter extends Component{
  constructor(){
    super()
    this.state={
      ttsum:0
    }
  }
  render(){
    return(
      <div>
        totalSum:{this.state.ttsum}
      </div>  
    )
  }
}

export default Counter;