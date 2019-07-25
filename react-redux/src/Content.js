import React, { Component } from 'react'
import { connect } from './react-redux'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	render() {
		return (
			<div>
				<p style={{ color: this.props.themeColor }}>hong</p>
				<ThemeSwitch />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	}
}

export default connect(
	Content,
	mapStateToProps
)
