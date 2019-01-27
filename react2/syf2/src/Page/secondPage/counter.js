import React, { Component } from 'react';
import './TwoPage.css';

class Counter extends Component{
  constructor(){
    super()
    this.state={
      sum:0
    }
  }
  add(){
    this.setState({
      sum:this.state.sum+1
    })
  }
  red(){
    this.setState({
      sum:this.state.sum-1
    })    
  }
  render(){
    return(
      <div>
        <button onClick={this.add.bind(this)}>+</button>&nbsp;&nbsp;&nbsp;<button onClick={this.red.bind(this)}>-</button>&nbsp;&nbsp;&nbsp;{this.props.tip}:{this.state.sum}
        <hr/>
      </div>  
    )
  }
}

export default Counter;