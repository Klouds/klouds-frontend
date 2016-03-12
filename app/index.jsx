import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes.js'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


//if we ever want to persist the data to local storage, we should use this.
//our application depends on a backend so this isn't needed 
//but im leaving it here incase I want it later
//
//TODO: remove storage and persist from package.json
//
//import alt from './libs/alt'
//import storage from './libs/storage'
//import persist from './libs/persist'
//
//persist(alt, storage, 'app')

ReactDOM.render(	
	<Router location={browserHistory} history={browserHistory}
			onUpdate={() => window.scrollTo(0,0)}>
		{routes}
	</Router>,
	document.getElementById('app')
	)