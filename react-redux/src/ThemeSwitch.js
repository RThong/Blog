import React, { Component } from 'react'
import { connect } from './react-redux'
class ThemeSwitch extends Component {
	render() {
		console.log('ThemeSwitch', this.props)

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

const mapStateToProps = state => {
	return {
		themeColor: state.themeColor
	}
}

const mapDispatchToProps = dispatch => {
	return {
		change(color) {
			dispatch({ type: 'CHANGE_COLOR', payload: color })
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThemeSwitch)
