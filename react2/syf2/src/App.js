import React, { Component } from 'react';
import './App.css';
import Nav from './nav'
import OnePage from './Page/firstPage/OnePage_head'
import TwoPage from './Page/secondPage/secondHead'
import ThirdPage from './Page/thirdPage/thirdHead'
import ErrPage from './Page/error'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';


class App extends Component { 
  render() {
    return (
      <Router>
        <div>
          <Nav/>
            <Switch>
            <Route  path="/fp" component={OnePage}/>
            <Route  path="/sp" component={TwoPage}/>
            <Route  path="/tp" component={ThirdPage}/>
            <Route  component={ErrPage} />
            </Switch>
        </div> 
      </Router>  
    );
  }
}

export default App;
