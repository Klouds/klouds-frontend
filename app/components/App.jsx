//Base of all reality
import React from 'react'


import PageComponent from './PageComponent/PageComponent.jsx'
	//Flux Store Stuff
import AltContainer from 'alt-container'
import StoreTemplate from '../stores/StoreTemplate.jsx'
import ActionsTemplate from '../actions/ActionsTemplate.jsx'


//Functional Components
import request from 'request-json'

export default class App extends React.Component {
	constructor( props ) {
		super( props )

		this.state = {
			currentStore: StoreTemplate,
			user: {
				username: 'loggedOut',
				jwt: null
			}
		}
	}

	componentDidUpdate() {

	}

	componentDidMount() {

	}

	//attemps log in, returns true if it works
	attemptLogIn( username, password ) {

		this.setState( {
			user: {
				username: username,
				jwt: 'randomhash'
			}
		} )

		//Try to log in here!
		//
		return true
	}

	render() {
		let value = StoreTemplate.getState().applications
		return ( < div className = 'Page' >
			< AltContainer stores = {
				[ this.state.currentStore ]
			}
			inject = {
				{
					value: () => [ value ]
				}
			} >

			< PageComponent user = {
				this.state.user
			}
			path = {
				this.state.path
			}
			loginAction = {
				this.attemptLogIn.bind( this )
			}
			/>

			< /AltContainer> < /div >
		)
	}



}
