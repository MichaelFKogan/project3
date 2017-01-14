import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Login from '../Login'
import Search from '../Search'


import Home from '../Home'

import ResultsOne from '../children/ResultsOne'
import ResultsTwo from '../children/ResultsTwo'
import ResultsThree from '../children/ResultsThree'

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
