import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SideBarComponent from '../SideBarComponent/SideBarComponent.jsx'

export default class ContentComponent extends React.Component {
	constructor(props) {
		super(props)
		
		//import the value from Alt Store
		const {value} = this.props
	}

	componentWillMount() {

	}

	render() {
		return (
			<div className="Content">
				<table width="100%">
				<tbody>
				<tr>
				<td>
				 <SideBarComponent />
				</td>
				</tr>
				<tr>
				<td height="75px">
					Rawr
				</td>
				</tr>
				<tr>
				<td>
				Put some content in here!
				Yay!<br/>It grows! <br/>
				<br/>
				<br/>
				BWHAHAHA<br/><br/>
				</td>
				</tr>
				</tbody>
				</table>
			</div>
			)

	}
}