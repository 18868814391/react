import React, { Component } from 'react';
// import {Row, Col} from 'antd';
import {Link} from 'react-router-dom'

class Home extends Component {
  
  render() {
    return(
        <div>
          <ul>
            <li>
              <Link to="/main">Home1</Link>
            </li>  
            <li>
              <Link to="/about">About1</Link>
            </li>  
            <li>
              <Link to="/topics">Tpics1</Link>
            </li>  
          </ul>
          <hr/> 
          {this.props.children}         
        </div>  
    )
  }
}

export default Home;
