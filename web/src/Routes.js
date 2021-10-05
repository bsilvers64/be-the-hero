import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
	
// importing all components
import Logon from './pages/Logon'

function Routes() {
	return (
	// BrowserRouter is the main route component, it will always be outside everything
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={ Logon } />
			</Switch>
		</BrowserRouter>
	)
}

// Exports routes
export default Routes
