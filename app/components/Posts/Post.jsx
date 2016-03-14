import React from 'react'
import fs from 'fs'
import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import mdloader from 'markdown-loader'

//Base of all reality
export default class Post extends React.Component {
	constructor(props) {
        super(props);
        console.log(this.props)
        const {filename} = this.props

        console.log(filename)
      
        var file = require("html!markdown!./" + filename + ".md")

        this.state = { contents: file };
      
    }

    rawMarkup() {
    	return{ __html: file}
    }

    render() {

    	return(
            <ReactMarkdown source={this.state.contents} />
        )
    }
}
