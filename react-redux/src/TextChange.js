import React, { Component } from 'react'
import { connect } from './react-redux'
class TextChange extends Component {
	render() {
		console.log('textChange', this.props)
		return (
			<div>
				<button onClick={() => this.props.changeText('1111')}>1111</button>
				<button onClick={() => this.props.changeText('2222')}>2222</button>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		text: state.text
	}
}
const mapDispatchToProps = dispatch => {
	return {
		changeText(text) {
			dispatch({ type: 'CHANGE_TEXT', payload: text })
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TextChange)
