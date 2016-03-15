import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx'
import ContentComponent from '../ContentComponent/ContentComponent.jsx'
import LoginBar from '../LoginBar/LoginBar.jsx'
import AlloyEditor from 'alloyeditor'

export default class PageComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value, path} = this.props
	}

	componentWillMount() {

	}

	render() {
		return (
			<div>		
						<LoginBar />				
						<HeaderComponent />
						<ContentComponent path={this.props.path} />

			</div>
			)

	}
}