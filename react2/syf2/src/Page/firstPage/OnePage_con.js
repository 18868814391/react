import React, { Component } from 'react';
import './OnePage.css';

class OnePage_con extends Component{
  constructor(){
    super()
    this.state={
      page1:[],
      page2:[],
      page3:[],
      page4:[],
    }
  }
  componentWillReceiveProps(nextProps){
    // this.setState({someThings: nextProps.someThings});
    // console.log('props改变',nextProps);
    // let con=nextProps.con.con;
    // let num=nextProps.con.num;
    // if(num===1){
    //   this.state.page1.push(con)
    //   this.setState({
    //     page1:this.state.page1
    //   })
    // }else if(num===2){
    //   this.state.page2.push(con)
    //   this.setState({
    //     page2:this.state.page2
    //   })
    // }else if(num===3){
    //   this.state.page3.push(con)
    //   this.setState({
    //     page3:this.state.page3
    //   })
    // }else if(num===4){
    //   this.state.page4.push(con)
    //   this.setState({
    //     page4:this.state.page4
    //   })
    // }    
  }
  myCon(){
    let con=this.props.con.con;
    let num=this.props.con.num;
    if(num===1){
      this.state.page1.push(con)
      this.setState({
        page1:this.state.page1
      })
    }else if(num===2){
      this.state.page2.push(con)
      this.setState({
        page2:this.state.page2
      })
    }else if(num===3){
      this.state.page3.push(con)
      this.setState({
        page3:this.state.page3
      })
    }else if(num===4){
      this.state.page4.push(con)
      this.setState({
        page4:this.state.page4
      })
    }
  }

  render(){
    return(
      <div className="fp-con">
          <span>{this.props.imgNum}</span>
          {this.props.imgNum===1?<span>
            page1<br/>
            {this.state.page1.map((item,i)=><p key={i}>{item}</p>)}
          </span>:null}
          {this.props.imgNum===2?<span>
            page2<br/>
            {this.state.page2.map((item,i)=><p key={i}>{item}</p>)}
          </span>:null}
          {this.props.imgNum===3?<span>
            page3<br/>
            {this.state.page3.map((item,i)=><p key={i}>{item}</p>)}
          </span>:null}
          {this.props.imgNum===4?<span>
            page4<br/>
            {this.state.page4.map((item,i)=><p key={i}>{item}</p>)}
          </span>:null} 
      </div>  
    )
  }
}

export default OnePage_con;