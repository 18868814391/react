import React, { Component } from 'react';
import Clock from './Clock';
import Input from './Input';
import List from './List';
import './App.css';


class App extends Component {  
  constructor(){
    super()
    this.state={
      commentt:[
        {name:'44',content:'66'}
      ],
      hideB:true,
      hideC:true,
    }
  };
  handleSubmitComment (comment) {
    this.state.commentt.push(comment)
    this.setState({
      commentt: this.state.commentt
    }) 
    //  this.setState({
    //   commentt: this.state.commentt.concat([comment])
    // })   
  };
  changeShow(d){
    this.setState({
      hideB:d
    })
  };
  hideClock(d){
    this.setState({
      hideC:d
    })    
  };
  showClock(){
    this.setState({
      hideC:true
    })  
  };
  componentDidMount(){
    console.log(this.input)
    this.input.focus()
  };
  render() {
    return (
      <div className="wrapper">
          <input placeholder='focus this' ref={(input)=>this.input=input}></input>
          {this.state.hideC?<Clock hideClock={this.hideClock.bind(this)}/>:null}
          {this.state.hideC?null:<button onClick={this.showClock.bind(this)}>显示时间</button>}
          <Input onSubmit={this.handleSubmitComment.bind(this)} changeShow={this.changeShow.bind(this)}/>
          {this.state.hideB ? <List comments={this.state.commentt}/> : null}
      </div>
    );
  }
}



export default App;
