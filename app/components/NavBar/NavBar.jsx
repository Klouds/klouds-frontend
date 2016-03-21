import React from 'react'
import LoginBar from '../LoginBar/LoginBar.jsx'

export default class NavBar extends React.Component {
	constructor( props ) {
		super( props )

		const {
			user, nav, loginAction
		} = this.props

		this.state = {
			expanded: false
		}
	}

	render() {
		return (
			<div className="NavBar">
					<button key='home' onClick={this.clickedNav.bind(this, '/')} className="Link" >Home</button>
					<button key='pricing' onClick={this.clickedNav.bind(this, '/pricing')} className="Link" > Pricing</button>
					<button key='products' onClick={this.clickedNav.bind(this, '/products')} className="Link" >Products</button>
					<button key='about' onClick={this.clickedNav.bind(this, '/about')} className="Link" to="/about_us">About Us</button>
					<button key='docs' onClick={this.clickedNav.bind(this, '/docs')} className="Link" to="/docs">Documentation</button>
					<div className="SideBar-collapse" onClick={this.toggleSideBar.bind(this)} /> 
					<br/>
					<LoginBar nav={this.props.nav} loginAction={this.props.loginAction} user={this.props.user} expanded={this.state.expanded} />
			</div>
		)
	}

	toggleSideBar() {
		this.setState( {
			expanded: !this.state.expanded
		} )
	}


	clickedNav( path ) {
		this.props.nav( path )
	}
}
