import React from 'react'
import fs from 'fs'
import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import mdloader from 'markdown-loader'

//Base of all reality
export default class Post extends React.Component {
	constructor(props) {
        super(props);
        const {filename} = this.props
        var file = require("html!markdown!./" + filename + ".md")

        this.contents = file;
      
    }


    render() {

    	return(
            <ReactMarkdown source={this.contents} />
        )
    }
}
