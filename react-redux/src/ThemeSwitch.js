import React, { Component } from 'react'
import { Context } from './context'

class ThemeSwitch extends Component {
	static contextType = Context

	render() {
		return (
			<div>
				<button style={{ color: this.context.themeColor }} onClick={() => this.props.changeColor('red')}>
					Red
				</button>
				<button style={{ color: this.context.themeColor }} onClick={() => this.props.changeColor('blue')}>
					Blue
				</button>
			</div>
		)
	}
}

export default ThemeSwitch
