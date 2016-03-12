import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SideBarComponent from '../SideBarComponent/SideBarComponent.jsx'

export default class ComponentTemplate extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value, path, path2} = this.props
	}

	componentWillMount() {

	}

	render() {
		return (
			<div className="Content">
				<SideBarComponent />
				{this.props.path}<br/>
				{this.props.path2}
			</div>
			)

	}
}