import React, { Component } from 'react';
import Counter from './counter'
import Ttsum from './countSum'
import './TwoPage.css';

class TwoPage_hen extends Component{
  render(){
    return(
      <div className="sp-hen">
        <Counter tip={'firstCounter'}/>
        <Counter tip={'secondCounter'}/>
        <Counter tip={'thirdCounter'}/>
        <Ttsum/>
      </div>  
    )
  }
}

export default TwoPage_hen;