import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx'
import ContentComponent from '../ContentComponent/ContentComponent.jsx'
import LoginBar from '../LoginBar/LoginBar.jsx'
import AlloyEditor from 'alloyeditor'

var times=0;
export default class PageComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value, nav} = this.props

		this.state = {
			path:window.location.pathname
		}
	}

	componentWillMount() {

	}

	render() {
		return (
			<div>		
						<LoginBar nav={this.navigate.bind(this)} />				
						<HeaderComponent />
						<ContentComponent nav={this.navigate.bind(this)} path={this.state.path} />

			</div>
			)

	}

	navigate(path) {
		window.history.pushState("", "Title", path);
		this.setState({path: path})	
	}

}