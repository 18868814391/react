import React, { Component } from 'react';
import './App.css';
import {Button,Steps,Switch} from 'antd';
import './base.less'

class App extends Component {
  
  render() {   
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
