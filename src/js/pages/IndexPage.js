import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink, RegistrationForm, ResetPasswordForm } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };



  // FIRST PAGE/WELCOME PAGE - LOGIN, CREATE ACCOUNT, ETC. 

  render() {
    return (
      <div className="container">
        
        <div className="jumbotron">
     
            <NotAuthenticated>
              <li><RegistrationForm>Sign Up</RegistrationForm></li>
              <li><LoginLink>Login</LoginLink> </li>
              <li><ResetPasswordForm>Forgot Password</ResetPasswordForm> </li>
            </NotAuthenticated>

            <Authenticated>

            <li><Link to="/profile">Edit Profile</Link></li>
            <li><Link to="/Search">Search</Link></li>
</Authenticated>

         
        </div>
      </div>
    );
  }
}
