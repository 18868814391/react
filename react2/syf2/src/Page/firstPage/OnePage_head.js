import React, { Component } from 'react';
import OnePagecon from './OnePage_con';
import OnePageinp from './OnePage_inp';
import './OnePage.css';

class OnePage extends Component {
  constructor(){
    super()
    this.state={
      imgNum:1,
      dataValue:{
        con:'',
        num:'',        
      }
    }
  }  
  changeImg(d){
    let self=this;
    this.setState({
      imgNum:d
    });
    setTimeout(function(){
      self.Inp.myNum();
    },10)
  }
  gotValue(d,n){
    console.log('主页面',d,n);
    this.setState({
      dataValue:{
        con:d,
        num:n,
      }
    })
    let self=this;
    setTimeout(function(){
      self.child.myCon();
    },10)
  }
  render() {
    return (
      <div>
      <div className="fp-head">
        <div className={this.state.imgNum===1?'fp-head-item2':'fp-head-item'} onClick={this.changeImg.bind(this,1)}>栏目1</div>
        <div className={this.state.imgNum===2?'fp-head-item2':'fp-head-item'} onClick={this.changeImg.bind(this,2)}>栏目2</div>
        <div className={this.state.imgNum===3?'fp-head-item2':'fp-head-item'} onClick={this.changeImg.bind(this,3)}>栏目3</div>
        <div className={this.state.imgNum===4?'fp-head-item2':'fp-head-item'} onClick={this.changeImg.bind(this,4)}>栏目4</div>
      </div>
      <OnePagecon imgNum={this.state.imgNum} con={this.state.dataValue} ref={(child) => { this.child = child}}/>
      <OnePageinp gotValue={this.gotValue.bind(this)} changeLanmu={this.changeImg.bind(this)}  imgNum={this.state.imgNum}  ref={(Inp) => { this.Inp = Inp}}/>
      </div>
    );
  }
}

export default OnePage;


