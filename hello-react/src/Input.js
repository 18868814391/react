import React, { Component } from 'react'

class Input extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            content:'',
            createdTime:'',
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
            console.log(+new Date())
            // this.setState({
            //     createdTime:+new Date() 
            // })
            // const { name, content,createdTime } = this.state;
            this.props.onSubmit({
                name:this.state.name, 
                content:this.state.content,
                createdTime:+new Date() 
            })
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
    handBlur(event){
        console.log(event.target.value)
        localStorage.setItem('Rusername', event.target.value)
    };
    componentWillMount(){
        this.setState({
            name: localStorage.getItem('Rusername'),
        })
    }
    componentDidMount(){
        this.input.focus()
      };    
  render() {
    return (
      <div> 
          用户名：<input value={this.state.name} onChange={this.namechange.bind(this)} onBlur={this.handBlur.bind(this)}></input>
          <br/>
          评论内容：<textarea value={this.state.content} onChange={this.contentchange.bind(this)} ref={(input)=>this.input=input}></textarea>
          <br/>
          <button onClick={this.Submit.bind(this)}>发布</button>
          <button onClick={this.changeBB.bind(this)}>隐藏内容</button>
      </div>
    )
  }
}

export default Input