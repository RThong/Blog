import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import TextChange from './TextChange'
import { Provider } from './react-redux'

const createStore = reducer => {
	let state = null
	const listeners = [] // 存储渲染回调
	const getState = () => state // 外部需要获取最新的state传给renderApp
	const dispatch = action => {
		state = reducer(state, action)
		listeners.forEach(fn => fn())
	}
	const subscribe = fn => {
		listeners.push(fn)
	}
	dispatch({}) //初始化state
	return { dispatch, subscribe, getState }
}

const reducer = (state, action) => {
	if (!state) {
		return {
			themeColor: 'red',
			text: '1111'
		}
	}
	switch (action.type) {
		case 'CHANGE_COLOR':
			return {
				...state,
				themeColor: action.payload
			}
		case 'CHANGE_TEXT':
			return {
				...state,
				text: action.payload
			}
		default:
			return state
	}
}
const store = createStore(reducer)

class Index extends Component {
	state = {
		test: 1
	}
	render() {
		return (
			<Provider store={store}>
				<Header test={this.state.test} />
				<Content />
				<TextChange />
				<button onClick={() => this.setState({ test: this.state.test + 1 })}>click</button>
			</Provider>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))
