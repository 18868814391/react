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
        
      ],
      hideB:true,
      hideC:true,
    }
  };
  componentWillMount(){
    if(localStorage.getItem('commentData')){
      let daa=localStorage.getItem('commentData');
      this.setState({
        commentt:JSON.parse(daa)
      })
    }

  };
  handleSubmitComment (comment) {
    this.state.commentt.push(comment)
    this.setState({
      commentt: this.state.commentt
    })
    localStorage.setItem('commentData', JSON.stringify(this.state.commentt))
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
  ccc2(d){
    console.log(666,d);
    if(localStorage.getItem('commentData')){
      let daa=localStorage.getItem('commentData');
      let tt=JSON.parse(daa);
      console.log(tt)
      tt.splice(d,1)
      this.setState({
        commentt:tt
      })
      localStorage.setItem('commentData',JSON.stringify(tt))
    }    
  }
  render() {
    return (
      <div className="wrapper">
          {this.state.hideC?<Clock hideClock={this.hideClock.bind(this)}/>:null}
          {this.state.hideC?null:<button onClick={this.showClock.bind(this)}>显示时间</button>}
          <Input onSubmit={this.handleSubmitComment.bind(this)} changeShow={this.changeShow.bind(this)}/>
          {this.state.hideB ? <List comments={this.state.commentt} ccc2={this.ccc2.bind(this)}/> : null}
      </div>
    );
  }
}



export default App;
