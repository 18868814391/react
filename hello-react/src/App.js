import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import './App.css';


class App extends Component {  
  constructor(){
    super()
    this.state={
      commentt:[
        {name:'44',content:'66'}
      ]
    }
  }
  handleSubmitComment (comment) {
    this.state.commentt.push(comment)
    this.setState({
      commentt: this.state.commentt
    }) 
    //  this.setState({
    //   commentt: this.state.commentt.concat([comment])
    // })   
    
  };
  render() {
    return (
      <div className="wrapper">
          <Input onSubmit={this.handleSubmitComment.bind(this)}/>
          <List comments={this.state.commentt}/>
      </div>
    );
  }
}



export default App;
