import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      

      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">

          <ul className="nav navbar-nav">
              
              <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>iCODE</Link></li>
        </ul>
            

            <ul className="nav navbar-nav navbar-right">

              <NotAuthenticated>
                <li><LoginLink activeClassName="active">Login</LoginLink></li>
                <li><Link to="/register" activeClassName="active">Sign Up</Link></li>
              </NotAuthenticated>

              <Authenticated>  
                <li><Link to="/search" activeClassName="active">Search</Link></li>
                <li><Link to="/profile" activeClassName="active">Edit Profile</Link></li>
                <li><LogoutLink>Logout</LogoutLink></li>

              </Authenticated>

            


          
          

              
            </ul>


          </div>
          

        </div>
      </nav>
    );
  }
}