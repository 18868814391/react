import React, { Component } from 'react';
import './App.css';
import OnePagehead from './firstPage/OnePage_head'
import OnePagecon from './firstPage/OnePage_con'

class App extends Component {
  render() {
    return (
      <div>
        <OnePagehead/>
        <OnePagecon/>
      </div>
    );
  }
}

export default App;
