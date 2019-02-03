import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './Main';
import Info from './info';
import About from '../route1/About';
import Topics from '../route1/Topics';
import Home from './Home';
import NoMath from './noMatch';

class IRoute extends Component {
  
  render() {
    return(
      <Router>
        <Home>
          <Switch>
          <Route path="/main" render={()=>
            <Main>
              <Route path="/main/:value" component={Info}></Route>
            </Main>  
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
          <Route component={NoMath}></Route>
        </Switch>
        </Home>        
      </Router>  
    )
  }
}

export default IRoute;
