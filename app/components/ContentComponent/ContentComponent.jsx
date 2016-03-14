import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LoginBar from '../LoginBar/LoginBar.jsx'
import Post from '../Posts/Post.jsx'




export default class ContentComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value, path} = this.props

	}

	componentWillMount() {

	}

	render() {
		
		var posts = []

		posts.push(<Post key='welcome' filename='WelcomePost'/>)
		posts.push(<Post key='fuckoff' filename='FuckOffPost'/>)
	
		var body = []

		for (let i = 0; i<posts.length; i++) {
			body.push(
				<div className="Post">
				{posts[i]}
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