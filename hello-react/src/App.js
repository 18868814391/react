import React, { Component } from 'react';
import './App.css';

class Title extends Component{
  render(){
    return(
      <b>i am title</b>
    )
  }
}

class App extends Component {  
  fun1(aa,bb){
    const flag=true;
    return flag?aa:bb
  }
  fun2(e){
    console.log(e.target.innerHTML,this)
  }
  render() {
    return (
      <div>
          <p onClick={this.fun2.bind(this)}>
            2333{this.fun1(<i>qq</i>,<b>ww</b>)}
          </p>
          <Title/>
          <Footer/>
          <Like/>
      </div>
    );
  }
}

class Footer extends Component{
  render(){
    return(
      <div>
        i am footer
      </div>
    )
  }
}

class Like extends Component{
  constructor(){
    super();
    this.state={is:true};
    this.handerClick  = this.handerClick.bind(this);
  }
  handerClick(){
    this.setState({
      is: !this.state.is
    })
  }
  render(){
    return(
      <button onClick={this.handerClick}>
        {this.state.is?'喜欢':'讨厌'}
      </button>
    )
  }
}

export default App;
