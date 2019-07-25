import React, { Component } from 'react'
// import { Context } from './context'
import { connect } from './react-redux'
class Header extends Component {
	render() {
		return <h1 style={{ color: this.props.themeColor }}>hong</h1>
	}
}

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	}
}
export default connect(
	Header,
	mapStateToProps
)
