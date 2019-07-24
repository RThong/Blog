import React, { Component } from 'react'
import { Context } from './context'
class Header extends Component {
	static contextType = Context

	state = {
		themeColor: ''
	}
	componentWillMount() {
		const store = this.context
		this.setState({
			themeColor: store.getState().themeColor
		})
		store.subscribe(() => {
			this.setState({
				themeColor: store.getState().themeColor
			})
		})
	}

	render() {
		return <h1 style={{ color: this.state.themeColor }}>hong</h1>
	}
}

export default Header
