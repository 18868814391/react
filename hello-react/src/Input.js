import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            content:'',
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
  render() {
    return (
      <div>
          用户名：<input value={this.state.name} onChange={this.namechange.bind(this)}></input>
          <br/>
          评论内容：<textarea value={this.state.content} onChange={this.contentchange.bind(this)}></textarea>
          <br/>
          <button onClick={this.Submit.bind(this)}>发布</button>
      </div>
    )
  }
}

export default Input