import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App.jsx'

const routes = (
	<Route>
	    <Route path="/" component={App} />
	</Route>

)

export default routes