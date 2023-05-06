import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
	
// importing all components
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/Incident/New'
import EditIncident from './pages/Incident/Edit'
import Seva from './pages/initial/finalseva'
import aboutus from './pages/initial/aboutus'
import list from './pages/initial/list'
import blog from './pages/initial/blogs'

function Routes() {
	return (
	// BrowserRouter is the main route component, it will always be outside everything
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={ Seva } />
				<Route path='/login' exact component={ Logon } />
				<Route path='/blogs' exact component={ blog } />
				<Route path='/ngolist' exact component={ list } />
				<Route path='/register' component={ Register } />
				<Route path='/aboutus' component={ aboutus } />
				<Route path='/profile' component={ Profile } />
				<Route path='/incident/new' component={ NewIncident } />
				<Route path='/incident/edit/:id' component={ EditIncident } />
			</Switch>
		</BrowserRouter>
	)
}

// Exports routes
export default Routes
