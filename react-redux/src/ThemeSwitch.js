import React, { Component } from 'react'
import { connect } from './react-redux'
class ThemeSwitch extends Component {
	render() {
		return (
			<div>
				<button
					style={{ color: this.props.themeColor }}
					onClick={() => {
						this.props.change('red')
					}}
				>
					Red
				</button>
				<button
					style={{ color: this.props.themeColor }}
					onClick={() => {
						this.props.change('blue')
					}}
				>
					Blue
				</button>
			</div>
		)
	}
}

export default connect(ThemeSwitch)
