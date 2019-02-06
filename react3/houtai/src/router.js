import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loading from './page/ui/loading';
import Notice from './page/ui/notice';
import Messages from './page/ui/message';
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
                    <Route path="/admin/ui/loadings" component={Loading}/>
                    <Route path="/admin/ui/notification" component={Notice}/>
                    <Route path="/admin/ui/messages" component={Messages}/>
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
