import React, { Component } from 'react'
import './App.css';
import Comment from './Comment';
class List extends Component {

  static defaultProps = {
    comments: []
  }
  ccc(d){
    this.props.ccc2(d);
  };
  render() {
    console.log('收到的属性',this.props.comments)
    return (
      <div>
        {this.props.comments.map((item,i)=>
          <Comment comment={item} key={i} inde={i} ccc={this.ccc.bind(this)}/>
        )}
      </div>
    )
  }
}

export default List