import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'
import ReactCollapse from 'react-collapse'
import {presets} from 'react-motion'

export default class LoginBar extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value, nav} = this.props
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
					<button key='home' onClick={this.clickedNav.bind(this, '/')} className="Link" >Home</button>
					<button key='pricing' onClick={this.clickedNav.bind(this, '/pricing')} className="Link" > Pricing</button>
					<button key='products' onClick={this.clickedNav.bind(this, '/products')} className="Link" >Products</button>
					<button key='about' onClick={this.clickedNav.bind(this, '/about')} className="Link" to="/about_us">About Us</button>
					<button key='docs' onClick={this.clickedNav.bind(this, '/docs')} className="Link" to="/docs">Documentation</button>
					<div className="SideBar-collapse" onClick={this.toggleSideBar.bind(this)} /> 
					<br/>
					{body}
				</div>
				)

	}

	toggleSideBar() {
		this.setState({expanded: !this.state.expanded})
	}

	clickedNav(path){
		console.log(path)
		this.props.nav(path)
	}
}