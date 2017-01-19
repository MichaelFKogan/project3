import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { ChangePasswordPage, MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, SearchPage } from './pages';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

import ResultsOne from './pages/children/ResultsOne';
import ResultsTwo from './pages/children/ResultsTwo';
import ResultsThree from './pages/children/ResultsThree';

ReactStormpath.init();



// HANDLES ROUTING OF THE APP

ReactDOM.render(
  <Router history={browserHistory}>

    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />

      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/change' component={ChangePasswordPage} />
      <Route path='/forgot' component={ResetPasswordPage} />

        {/* THESE PAGES BELOW ARE ONLY FOR SIGNED IN USERS */}
      <AuthenticatedRoute>
        
        <Route path='/Search' component={SearchPage} />
            <Route path="/ResultsOne" component={ResultsOne}/> 
            <Route path="/ResultsTwo" component={ResultsTwo}/> 
            <Route path="/ResultsThree" component={ResultsThree}/> 
        <Route path='/profile' component={ProfilePage} />
        <Route path='/' component={LoginPage} />

      </AuthenticatedRoute>

    </HomeRoute>

  </Router>,
  document.getElementById('app-container')
);