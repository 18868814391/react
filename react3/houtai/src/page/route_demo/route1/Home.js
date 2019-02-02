import React, { Component } from 'react';
// import {Row, Col} from 'antd';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Main from './Main';
import About from './About';
import Topics from './Topics';

class Home extends Component {
  
  render() {
    return(
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>  
            <li>
              <Link to="/about">About</Link>
            </li>  
            <li>
              <Link to="/topics">Tpics</Link>
            </li>  
          </ul>
          <hr/>
          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>            
        </div>  
      </HashRouter>  
    )
  }
}

export default Home;
