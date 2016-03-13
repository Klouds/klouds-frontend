import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'
import ReactCollapse from 'react-collapse'
import {presets} from 'react-motion'

export default class SideBarComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value} = this.props
		this.state = {
			expanded :false
		}
	}

	componentWillMount() {

	}

	render() {

		var body = []

			body.push(
			<ReactCollapse className="SideBar" isOpened={this.state.expanded} springConfig={presets.wobbly}>
					<div >
					<input defaultValue="Username"/>
					<input defaultValue="Password"/>
					<button >Login</button>
					</div>	
			</ReactCollapse>
			)
		

		return (
				<div className="NavBar-collapse">
					<button className="Link" to="/">Home</button>
					<button className="Link" to="/pricing">Pricing</button>
					<button className="Link" to="/products">Products</button>
					<button className="Link" to="/about_us">About Us</button>
					<button className="Link" to="/docs">Documentation</button>
					<div className="SideBar-collapse" onClick={this.toggleSideBar.bind(this)} /> 
					<br/>
					{body}
				</div>
				)

	}

	toggleSideBar() {
		this.setState({expanded: !this.state.expanded})
	}

}