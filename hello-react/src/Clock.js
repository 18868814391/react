import React, { Component } from 'react'

class Clock extends Component {
  constructor(){
    super();
    this.state={
      date:new Date(),
      flag:false,
    }
  };
  componentWillMount(){
    this.timer=setInterval(()=>{
      this.setState({date:new Date()})
    },1000)
  };
  componentWillUnmount () {
    clearInterval(this.timer)
  }  
  Noclock(){
    if(this.props.hideClock){
      this.setState({
        flag:!this.state.flag
      })
      this.props.hideClock(this.state.flag)            
  }    
  };
  render() {
    return (
      <div>
        <span>现在的时间是：{this.state.date.toLocaleTimeString()}</span>
        <button onClick={this.Noclock.bind(this)}>隐藏时间</button>
      </div>
    )
  }
}

export default Clock
