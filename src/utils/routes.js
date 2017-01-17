// DEPENDENCIES
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath'

// Import Pages and Components
import Login from '../components/Login'
import LoginPage from '../components/LoginPage'
import RegistrationPage from '../components/RegistrationPage'
import ProfilePage from '../components/ProfilePage'
import Search from '../components/Search'
import Home from '../components/Home'
import ResultsOne from '../components/children/ResultsOne'
import ResultsTwo from '../components/children/ResultsTwo'
import ResultsThree from '../components/children/ResultsThree'

module.exports = (

<Route>

<Route path="/" component={Login}>
	<IndexRoute component={Home}/>
	<LoginRoute path='/login' component={LoginPage} /> 
	<Route path='/register' component={RegistrationPage} />
	<AuthenticatedRoute path='/profile' component={ProfilePage} />
</Route>

	<Route path="/Search" component={Search} >
    
	    <Route path="/ResultsOne" component={ResultsOne}/> 
	    <Route path="/ResultsTwo" component={ResultsTwo}/> 
	    <Route path="/ResultsThree" component={ResultsThree}/> 

	</Route>

</Route>

)
