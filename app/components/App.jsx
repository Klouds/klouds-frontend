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

		let  path  = this.props.params.path
		let  path2  = this.props.params.path2
		this.state = {
			currentStore: StoreTemplate,
			path: path,
			path2: path2
		}	
	}

	componentDidUpdate() {		
		let  path  = this.props.params.path
		let  path2  = this.props.params.path2
 		
 		this.setState({path: path, path2:path2})

	}

	componentDidMount() {

	}

	
	render() {
		let value = StoreTemplate.getState().applications
		return (
			<div className='Page'>
				<AltContainer 
					stores= {[StoreTemplate]}
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