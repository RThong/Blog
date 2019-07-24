import React, { Component } from 'react'
// import { Context } from './context'
import { connect } from './react-redux'
class Header extends Component {
	// state = {
	// 	themeColor: ''
	// }
	// componentWillMount() {
	// 	const store = this.context
	// 	this.setState({
	// 		themeColor: store.getState().themeColor
	// 	})
	// 	store.subscribe(() => {
	// 		this.setState({
	// 			themeColor: store.getState().themeColor
	// 		})
	// 	})
	// }

	render() {
		return <h1 style={{ color: this.props.themeColor }}>hong</h1>
	}
}

export default connect(Header)
