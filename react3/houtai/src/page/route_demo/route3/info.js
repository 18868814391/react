import React, { Component } from 'react';
class Info extends Component {
  
  render() {
    return(
      <div>
        这里是设置动态理由
        {this.props.match.params.value}
      </div>
    )
  }
}

export default Info;
