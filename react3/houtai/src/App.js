import React, { Component } from 'react';
import './App.css';
import {Button,Steps} from 'antd';

class App extends Component {
  
  render() {
    const Step = Steps.Step;
    return (
      <div>
       <Button>233</Button>
      <Steps>
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
      </div>

    );
  }
}

export default App;
