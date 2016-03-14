import React from 'react'
//Base of all reality
export default class Post {
	constructor() {
		this.message = []
		this.timestamp = new Date()

		this.message.push (
			<div>
			<h1> My message </h1>
				&emsp;<img src={'app/images/logo.png'} />
			</div>
		)
	}
}