import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import Comment from './Comment';
import './App.css';


class App extends Component {  
  handleSubmitComment (comment) {
    console.log(comment)
  };
  render() {
    return (
      <div className="wrapper">
          <Input onSubmit={this.handleSubmitComment.bind(this)}/>
          <List/>
          <Comment/>
      </div>
    );
  }
}



export default App;
