import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div>
        <span>{this.props.comment.name}</span>
        <span>{this.props.comment.content}</span>
      </div>
    )
  }
}

export default Comment
