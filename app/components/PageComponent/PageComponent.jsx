import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx'
import ContentComponent from '../ContentComponent/ContentComponent.jsx'
import AlloyEditor from 'alloyeditor'

export default class PageComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value} = this.props
	}

	componentWillMount() {

	}

	render() {
		return (
			<div>

						<HeaderComponent />

						<ContentComponent path={this.props.path} path2={this.props.path2} />


			</div>
			)

	}
}