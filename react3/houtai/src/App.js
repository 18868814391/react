import React, { Component } from 'react';
import './App.css';
import {Button,Steps,Switch} from 'antd';
import './base.less'

class App extends Component {
  
  render() {
    const Step = Steps.Step;
    function onChange(checked) {
      console.log(`switch to ${checked}`);
    }    
    return (
      <div>
       <Button>233</Button>
      <Steps>
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Steps>
      <Switch defaultChecked onChange={onChange} />
      </div>

    );
  }
}

export default App;
