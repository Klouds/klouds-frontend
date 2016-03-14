import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'
import ReactCollapse from 'react-collapse'
import {presets} from 'react-motion'

export default class LoginBar extends React.Component {
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
			<ReactCollapse key='1' className="SideBar" isOpened={this.state.expanded} springConfig={presets.wobbly}>
					<div >
					<input key='username' defaultValue="Username"/>
					<input key='password' defaultValue="Password"/>
					<button >Login</button>
					</div>	
			</ReactCollapse>
			)
		

		return (
				<div className="NavBar-collapse">
					<button key='home' className="Link" to="/">Home</button>
					<button key='pricing' className="Link" to="/pricing">Pricing</button>
					<button key='products' className="Link" to="/products">Products</button>
					<button key='about' className="Link" to="/about_us">About Us</button>
					<button key='docs'className="Link" to="/docs">Documentation</button>
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