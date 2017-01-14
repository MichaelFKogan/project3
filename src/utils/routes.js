import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Login from '../components/Login'
import Search from '../components/Search'


import Home from '../components/Home'

import ResultsOne from '../components/children/ResultsOne'
import ResultsTwo from '../components/children/ResultsTwo'
import ResultsThree from '../components/children/ResultsThree'

module.exports = (

<Route>

<Route path="/" component={Login}>
	<IndexRoute component={Home}/> 
</Route>

	<Route path="/Search" component={Search} >
    
	    <Route path="/ResultsOne" component={ResultsOne}/> 
	    <Route path="/ResultsTwo" component={ResultsTwo}/> 
	    <Route path="/ResultsThree" component={ResultsThree}/> 

	</Route>

</Route>

)
