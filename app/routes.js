import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'

import App from './components/App.jsx'

const routes = (
	<Router history={browserHistory}>
	    <Route path="/" component={App} />

	</Router>

)

export default routes