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
	constructor(props) {
		super(props)

		this.state = {
			currentStore: StoreTemplate
		}	
	}

	componentDidUpdate() {		

	}

	componentDidMount() {

	}

	
	render() {
		let value = StoreTemplate.getState().applications
		return (
			<div className='Page'>
				<AltContainer 
					stores= {[this.state.currentStore]}
					inject={{
						value: () => [value]
				}}
				>
				
				<PageComponent path={this.state.path} path2={this.state.path2} />

				</AltContainer>
			</div>
		)
	}

}