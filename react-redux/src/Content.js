import React, { Component } from 'react'
import { Context } from './context'

import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	static contextType = Context
	state = {
		themeColor: ''
	}
	componentWillMount() {
		const store = this.context
		console.log(store.getState())
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
		return (
			<div>
				<p style={{ color: this.state.themeColor }}>hong</p>
				<ThemeSwitch />
			</div>
		)
	}
}

export default Content
