import React, { Component } from 'react'
import { Context } from './context'

class TextSwitch extends Component {
	static contextType = Context

	render() {
		return (
			<div>
				<button>1111</button>
				<button>2222</button>
			</div>
		)
	}
}

export default TextSwitch
