import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'
import ReactCollapse from 'react-collapse'

export default class SideBarComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value} = this.props
		const path = this.props.path
		this.expanded = false;
	}

	componentWillMount() {

	}

	render() {

		let body

		if (this.expanded === false) {
			body = (
				<div className="SideBar-collapse" onClick={this.expandSideBar.bind(this)} > 
				</div>
			)
		} else {
			body = (
			<ReactCollapse isOpened={this.expanded} className="SideBar">

			<div >
			<ul>

				<li><Link className="Link" to="/">Home</Link></li>
				<li><Link className="Link" to="/pricing">Pricing</Link></li>
				<li><Link className="Link" to="/products">Products</Link></li>
				<li><Link className="Link" to="/about_us">About Us</Link></li>
				<li><Link className="Link" to="/docs">Documentation</Link></li>
				

			</ul>
			</div>
							<div className="collapseIcon" onClick={this.hideSideBar.bind(this)}>
				</div>
			</ReactCollapse>
			)
		}

		return body

	}

	expandSideBar() {
		this.expanded = true
		this.forceUpdate()
	}

	hideSideBar() {
		this.expanded = false
		this.forceUpdate()
	}
}