import React, { Component } from 'react'
import { Context } from './context'

class ThemeSwitch extends Component {
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
		return (
			<div>
				<button
					style={{ color: this.state.themeColor }}
					onClick={() => {
						this.context.dispatch({ type: 'CHANGE_COLOR', payload: 'red' })
					}}
				>
					Red
				</button>
				<button
					style={{ color: this.state.themeColor }}
					onClick={() => {
						this.context.dispatch({ type: 'CHANGE_COLOR', payload: 'blue' })
					}}
				>
					Blue
				</button>
			</div>
		)
	}
}

export default ThemeSwitch
