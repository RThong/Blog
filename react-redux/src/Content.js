import React, { Component } from 'react'
import { Context } from './context'

import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
	static contextType = Context

	render() {
		return (
			<div>
				<p style={{ color: this.context.themeColor }}>hong</p>
				<ThemeSwitch changeColor={e => this.props.changeColor(e)} />
			</div>
		)
	}
}

export default Content
