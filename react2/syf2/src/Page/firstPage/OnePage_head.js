import React, { Component } from 'react';
import OnePagecon from './OnePage_con'
import './OnePage.css';

class OnePage extends Component {
  constructor(){
    super()
    this.state={
      imgNum:1,
    }
  }  
  changeImg(d){
    this.setState({
      imgNum:d
    }) 
    
  }
  render() {
    return (
      <div>
      <div className="fp-head">
        <div className="fp-head-item" onClick={this.changeImg.bind(this,1)}>页面1</div>
        <div className="fp-head-item" onClick={this.changeImg.bind(this,2)}>页面2</div>
        <div className="fp-head-item" onClick={this.changeImg.bind(this,3)}>页面3</div>
        <div className="fp-head-item" onClick={this.changeImg.bind(this,4)}>页面4</div>
      </div>
      <OnePagecon imgNum={this.state.imgNum} />
      </div>
    );
  }
}

export default OnePage;


