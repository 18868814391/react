import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            content:'',
            stt:true,
        }
    }
    namechange(e){
        this.setState({
            name: e.target.value
          })
    };
    contentchange(e){
        this.setState({
            content: e.target.value
          })        
    };
    Submit(){
        if(this.props.onSubmit){
            const { name, content } = this.state
            this.props.onSubmit({name, content})
        }
        this.setState({ content: '' })
    };
    changeBB(){
        if(this.props.changeShow){
            this.setState({
                stt:!this.state.stt
            })
            this.props.changeShow(this.state.stt)            
        }
 
    };
  render() {
    return (
      <div>
          用户名：<input value={this.state.name} onChange={this.namechange.bind(this)}></input>
          <br/>
          评论内容：<textarea value={this.state.content} onChange={this.contentchange.bind(this)}></textarea>
          <br/>
          <button onClick={this.Submit.bind(this)}>发布</button>
          <button onClick={this.changeBB.bind(this)}>隐藏内容</button>
      </div>
    )
  }
}

export default Input