import React, { Component } from 'react';
import './OnePage.css';

class OnePage_inp extends Component{
  constructor(){
    super();
    this.state={
      lanmu:1,
      inpValu:'',
    }
  }
  myNum(){
    this.setState({
      lanmu:this.props.imgNum
    })
    // let self=this
    // setTimeout(function(){
    //   self.props.changeLanmu(self.state.lanmu)
    // },10)    
  }
  funsele(){
    if(this.state.lanmu<4){
      this.setState({
        lanmu:this.state.lanmu+1
      })
      let self=this
      setTimeout(function(){
        self.props.changeLanmu(self.state.lanmu)
      },10)
    }else{
      this.setState({
        lanmu:1
      })
      let self=this
      setTimeout(function(){
        self.props.changeLanmu(self.state.lanmu)
      },10)
    }
  }
  handelChange(e){
    this.setState({
        inpValu:e.target.value
    })
  }
  handelSubmit(){
    let ddd=this.state.inpValu;
    let nnn=this.state.lanmu;
    this.props.gotValue(ddd,nnn)
  }
  render(){
    return(
      <div className="fp-inp">
         <input onChange={this.handelChange.bind(this)} defaultValue={this.state.inpValu}/>
         &nbsp;
         <button onClick={this.handelSubmit.bind(this)}>提交至栏目</button>
         &nbsp;
         <button onClick={this.funsele.bind(this)}>{this.state.lanmu}</button>
      </div>  
    )
  }
}

export default OnePage_inp;