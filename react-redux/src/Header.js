import React, { Component } from 'react'
// import { Context } from './context'
import { connect } from './react-redux'
class Header extends Component {
	render() {
		console.log('header', this.props)

		return <h1 style={{ color: this.props.themeColor }}>hong{this.props.test}</h1>
	}
}

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	}
}
export default connect(mapStateToProps)(Header)
