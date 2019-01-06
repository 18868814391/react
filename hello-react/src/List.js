import React, { Component } from 'react'
import './App.css';
import Comment from './Comment';
class List extends Component {

  static defaultProps = {
    comments: []
  }

  render() {
    console.log('收到的属性',this.props.comments)
    return (
      <div>
        {this.props.comments.map((item,i)=>
          <Comment comment={item} key={i}/>
        )}
      </div>
    )
  }
}

export default List