import React, {  } from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>(
  <div>
      <div>
          <NavLink to='/fp'><button>firstpage</button></NavLink> |&nbsp;
          <NavLink to='/sp'><button>secondpage</button></NavLink> |&nbsp;
          <NavLink to='/tp'><button>thirdpage</button></NavLink> |&nbsp;
          <NavLink to='/404'><button>errorpage</button></NavLink> |&nbsp;
      </div>
  </div>
  )
  export default NavBar;