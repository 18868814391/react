import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';

class Comment extends Component {
  static PropTypes={
    comment: PropTypes.object.isRequired
  }
  static contextTypes = {
    store: PropTypes.object
  }  
  constructor(){
    super()
    this.state={
      timeString:'',
      timer:null,
      themeColor: ''
    }
  }
  componentWillMount(){
    let self=this;
    this.timer=setInterval(function(){
      if(self.props.comment){
        const ddd=self.props.comment.createdTime;
        const duration=(+Date.now()*1-ddd*1)/1000;
        self.setState({
          timeString:duration*1>60?`${Math.round(duration*1/60)}分钟前`:`${Math.round(duration*1)}秒前`
        })  
      }
    },1000)
    this._updateThemeColor();
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())    
  }
  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }  
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  handleDelete(){
    this.props.ccc(this.props.inde)
  }
  zhuanyi(d){
    return d
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  render() {
    return (
      <div className="hovcom" style={{ color: this.state.themeColor }}>
        <span>{this.props.comment.name}:</span>
        <span dangerouslySetInnerHTML={{__html:this.zhuanyi(this.props.comment.content)}}></span>
        {this.props.comment.createdTime?<span>-----时间:{this.state.timeString}</span>:null}
        <button className="hovtit" onClick={this.handleDelete.bind(this)}>删除</button>
      </div>
    )
  }
}

export default Comment
