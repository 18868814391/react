import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Comment from './Comment';
class List extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  static defaultProps = {
    comments: []
  }
  constructor () {
    super()
    this.state = { themeColor: '' }
  }  
  ccc(d){
    this.props.ccc2(d);
  };
  componentWillMount () {
    this._updateThemeColor()
  }  
  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  } 
  handleSwitchColor (color) {
    const { store } = this.context
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }  
  render() {
    console.log('收到的属性',this.props.comments)
    return (
      <div>
        <button onClick={this.handleSwitchColor.bind(this, 'red')} style={{ color: this.state.themeColor }}>红色文字</button><button onClick={this.handleSwitchColor.bind(this, 'blue')} style={{ color: this.state.themeColor }}>蓝色文字</button>
        {this.props.comments.map((item,i)=>
          <Comment comment={item} key={i} inde={i} ccc={this.ccc.bind(this)} />
        )}
      </div>
    )
  }
}

export default List