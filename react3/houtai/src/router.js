import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import NoMatch from './page/noMatch/index';

class IRoter extends Component {
  render() {
    return(
      <HashRouter>
          <App>
              <Route path="/login" component={Login}/>
              <Route path="/admin" render={()=>
                <Admin>
                    <Switch>
                    <Route path="/admin/ui/buttons" component={Buttons}/>
                    <Route path="/admin/ui/modals" component={Modals}/>
                    <Route component={NoMatch}/>
                    </Switch>
                </Admin>    
              }/>
          </App>    
      </HashRouter>    
    )
  }
}

export default IRoter;
