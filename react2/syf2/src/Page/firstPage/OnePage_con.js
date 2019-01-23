import React, { Component } from 'react';
import './OnePage.css';

class OnePage_con extends Component{

  render(){
    return(
      <div className="fp-con">
          <span>{this.props.imgNum}</span>
          {this.props.imgNum===1?<span>page11111111111111</span>:null}
          {this.props.imgNum===2?<span>page2222222222222222</span>:null}
          {this.props.imgNum===3?<span>page333333333333</span>:null}
          {this.props.imgNum===4?<span>page444444444444</span>:null} 
      </div>  
    )
  }
}

export default OnePage_con;