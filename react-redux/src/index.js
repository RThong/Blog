import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { Context } from './context'
// const createStore = reducer => {
// 	let state = null
// 	const listeners = [] // 存储渲染回调
// 	const getState = () => state // 外部需要获取最新的state传给renderApp
// 	const dispatch = action => {
// 		state = reducer(state, action)
// 		listeners.forEach(fn => fn())
// 	}
// 	const subscribe = fn => {
// 		listeners.push(fn)
// 	}
// 	dispatch({}) //初始化state
// 	return { dispatch, subscribe, getState }
// }

class Index extends Component {
	state = {
		themeColor: 'red'
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<Header />
				<Content changeColor={e => this.setState({ themeColor: e })} />
			</Context.Provider>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))
