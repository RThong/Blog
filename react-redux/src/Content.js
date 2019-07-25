import React, { Component } from 'react'
import { connect } from './react-redux'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	render() {
		console.log('content', this.props)

		return (
			<div>
				<p style={{ color: this.props.themeColor }}>{this.props.text}</p>
				<ThemeSwitch />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor,
		text: state.text
	}
}

export default connect(mapStateToProps)(Content)
