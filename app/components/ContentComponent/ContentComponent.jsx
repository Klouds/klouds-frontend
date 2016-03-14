import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LoginBar from '../LoginBar/LoginBar.jsx'
import WelcomePost from '../Posts/WelcomePost.jsx'
import WhatWeDoPost from '../Posts/WhatWeDoPost.jsx'


export default class ContentComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value} = this.props

		this.state = {
			content: 'initial coneten'
		}
	}

	componentWillMount() {

	}

	render() {

		var posts = []

		

		posts.push (new WelcomePost())
		posts.push (new WhatWeDoPost())

		var body = []

		for (let i = 0; i<posts.length; i++) {
			body.push(
				<div key={i} className="Post">
					
					{posts[i].message}
					<br/>

				</div>
			)			
		}
		return (
			<div key='content' className="Content">
				<table width="100%">
				<tbody>
				<tr>
				<td>
				 <LoginBar key='loginbar' />
				</td>
				</tr>
				<tr>
				<td height="50px">
					Ad space
				</td>
				</tr>
				<tr>
				<td>
				{body}

				</td>
				</tr>
				</tbody>
				</table>
			</div>
			)

	}
}