import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LoginBar from '../LoginBar/LoginBar.jsx'
import Post from '../Posts/Post.jsx'



export default class ContentComponent extends React.Component {
	constructor( props ) {
		super( props )

		//import the value from Alt Store
		const {
			value, path, nav
		} = this.props

		this.state = {
			body: []
		}
	}

	componentWillReceiveProps( nextprops ) {}


	getBody() {

		var posts = this.getPosts()
		var body = []
		for ( let i = 0; i < posts.length; i++ ) {
			body.push(
				<div key={posts[i] + i} className="Post">
					{posts[i]}

					</div>
			)
		}

		if ( body.length === 0 ) {
			body.push(
				<div key='not_found' className="Post">
						The page you're looking for doesn't exist <br/><br/>
						<button onClick={this.navigate.bind(this,'/')}> Go Home, Son </button>
					</div>
			)
		}

		return body;
	}
	navigate( path ) {
		this.props.nav( path )
	}
	render() {
		return (
			<div key='content' className="Content">

				<table >
				<tbody>
				<tr>
				<td height="50px">
					Ad space
				</td>
				</tr>
				<tr>
				<td>
				{this.getBody()}

				</td>
				</tr>
				</tbody>
				</table>
			</div>
		)

	}

	getPosts( path ) {

		//This will handle loading the appropriate pages
		var path = this.props.path
		var posts = []
		switch ( path ) {
			case '/':
				{
					posts.push( <Post key='welcome' filename={'Home/WelcomePost'}/> )
					posts.push( <Post key='fuckoff' filename={'Home/WhatWeOffer'}/> )
					posts.push( <Post key='readme' filename={'Home/TheThing'}/> )
					break
				}
			case '/pricing':
				{
					posts.push( <Post key='pricingblurb' filename={'Pricing/PricingBlurb'} /> )
					break
				}
			case '/products':
				{
					posts.push( <Post key='productblurb' filename={'Products/Products'} /> )
					break
				}
			case '/about':
				{
					posts.push( <Post key='aboutblurb' filename={'About/Klouds'} /> )
					break
				}
			case '/docs':
				{
					posts.push( <Post key='docsblurb' filename={'Docs/kDaemon'} /> )
					break
				}
		}
		return posts

	}
}
