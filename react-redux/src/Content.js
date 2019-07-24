import React, { Component } from 'react'
import { connect } from './react-redux'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	// state = {
	// 	themeColor: ''
	// }
	// componentWillMount() {
	// 	const store = this.context
	// 	console.log(store.getState())
	// 	this.setState({
	// 		themeColor: this.props.themeColor
	// 	})
	// }
	render() {
		return (
			<div>
				<p style={{ color: this.props.themeColor }}>hong</p>
				<ThemeSwitch />
			</div>
		)
	}
}

export default connect(Content)
