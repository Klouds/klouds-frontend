import React from 'react'
import Post from '../Post.jsx'
//Base of all reality
export default class WhatWeDoPost extends Post {
	constructor(props) {
		super(props)

		this.message = (
			<div>
			<h1> What we do: </h1>
				<ul>
				<li> &emsp;One thing</li>
				<li>   &emsp;Two thing</li>
				<li>  &emsp;Three thing</li>
				</ul>
			</div>
		)
	}
}