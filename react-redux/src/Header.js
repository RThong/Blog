import React, { Component } from 'react'
import { Context } from './context'
class Header extends Component {
	static contextType = Context
	render() {
		return <h1 style={{ color: this.context.themeColor }}>hong</h1>
	}
}

export default Header
