import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
	Link
}
from 'react-router'
import ReactCollapse from 'react-collapse'
import {
	presets
}
from 'react-motion'

export default class LoginBar extends React.Component {
	constructor( props ) {
		super( props )

		//import the value from Alt Store
		const {
			value, nav, expanded, user, loginAction
		} = this.props

		this.state = {
			username: '',
			password: ''
		}


	}

	componentWillMount() {

	}

	checkEnter( e ) {
		if ( e.charCode === 13 ) {
			this.loginButtonClicked()
		}
	}

	render() {

		var divstyle = {
			float: 'right',
			verticalAlign: 'bottom'
		}

		var body = []
		if ( this.props.user.username === 'loggedOut' ) {
			body.push(
				<div key='loggedout'>
					<input key='username' 
					onChange={this.HandleLoginChange.bind(this)}
					onKeyPress={this.checkEnter.bind(this)}/>

					<input key='password' 
					type='password' 
					onChange={this.HandlePasswordChange.bind(this)}
					onKeyPress={this.checkEnter.bind(this)} />

					<button onClick={this.loginButtonClicked.bind(this)} >
					Login
					</button>
				</div>
			)
		} else {
			body.push(
				<div key='loggedin'>
					
					<div onClick={this.clickedNav.bind(this, '/user/profile')} className="HoverWrap">
						<table>
						<tbody>
						<tr>
						<td>
						<img src='/app/images/icon-profile.png' />
						</td>
						</tr>
						<tr>
						<td>
						<p className="HoverText"> Profile </p>
						</td>
						</tr>
						</tbody>
						</table>
					</div>

					<div onClick={this.clickedNav.bind(this, '/user/apps')} className="HoverWrap">
						<table>
						<tbody>
						<tr>
						<td>
						<img src='/app/images/network-icon.png' />
						</td>
						</tr>
						<tr>
						<td>
						<p className="HoverText"> My Apps </p>
						</td>
						</tr>
						</tbody>
						</table>
					</div>

					<div onClick={this.clickedNav.bind(this, '/user/settings')} className="HoverWrap">
						<table>
						<tbody>
						<tr>
						<td>
						<img src='/app/images/settings-icon.png' />
						</td>
						</tr>
						<tr>
						<td>
						<p className="HoverText"> Settings </p>
						</td>
						</tr>
						</tbody>
						</table>
					</div>
					<p style={divstyle}> Logged in as: {this.props.user.username} </p>
				</div>
			)
		}



		return (
			<ReactCollapse className="LoginBar" isOpened={this.props.expanded} springConfig={presets.wobbly}>
				{body} 
			</ReactCollapse>
		)

	}

	clickedNav( path ) {
		this.props.nav( path )
	}

	loginButtonClicked() {
		this.props.loginAction( this.state.username, this.state.password )
	}

	HandleLoginChange( e ) {
		this.setState( {
			username: e.target.value
		} )
	}

	HandlePasswordChange( e ) {
		this.setState( {
			password: e.target.value
		} )
	}
}
