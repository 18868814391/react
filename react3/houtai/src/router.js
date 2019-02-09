import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
// import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loading from './page/ui/loading';
import Notice from './page/ui/notice';
import Messages from './page/ui/message';
import Tabs from './page/ui/tabs';
import Gallery from './page/ui/gallery';
import Carousel from './page/ui/carousel';
import FormLogin from './page/form/login';
import FormRegister from './page/form/register';
import NoMatch from './page/noMatch/index';

class IRoter extends Component {
  render() {
    return(
      <HashRouter>
          <App>
              {/* <Route path="/login" component={Login}/> */}
              <Route path="/admin" render={()=>
                <Admin>
                    <Switch>
                    <Route path="/admin/ui/buttons" component={Buttons}/>
                    <Route path="/admin/ui/modals" component={Modals}/>
                    <Route path="/admin/ui/loadings" component={Loading}/>
                    <Route path="/admin/ui/notification" component={Notice}/>
                    <Route path="/admin/ui/messages" component={Messages}/>
                    <Route path="/admin/ui/tabs" component={Tabs}/>
                    <Route path="/admin/ui/gallery" component={Gallery}/>
                    <Route path="/admin/ui/carousel" component={Carousel}/>
                    <Route path="/admin/form/login" component={FormLogin}/>
                    <Route path="/admin/form/reg" component={FormRegister}/>
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
