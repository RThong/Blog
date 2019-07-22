// -----------------------------------------------  step1： 不能让任意函数都可以随意修改state，现在规定必须显示的申明dispatch -------------------------------------
// function renderApp(appState) {
// 	console.log('app')

// 	renderTitle(appState.title)
// 	renderContent(appState.content)
// }

// function renderTitle(title) {
// 	console.log('title')

// 	const titleDOM = document.getElementById('title')
// 	titleDOM.innerHTML = title.text
// 	titleDOM.style.color = title.color
// }

// function renderContent(content) {
// 	console.log('content')

// 	const contentDOM = document.getElementById('content')
// 	contentDOM.innerHTML = content.text
// 	contentDOM.style.color = content.color
// }

// const appState = {
// 	title: {
// 		text: '第一次title text',
// 		color: 'red'
// 	},
// 	content: {
// 		text: '第一次content text',
// 		color: 'blue'
// 	}
// }

// // 规定必须提交一个dispatch来申明修改数据
// const dispatch = action => {
// 	switch (action.type) {
// 		case 'UPDATE_TITLE_TEXT':
// 			appState.title.text = action.payload
// 			break
// 		case 'UPDATE_TITLE_COLOR':
// 			appState.title.color = action.payload
// 			break
// 		default:
// 			break
// 	}
// }
// renderApp(appState)
// dispatch({ type: 'UPDATE_TITLE_TEXT', payload: '第二次修改的title text' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', payload: 'green' })
// renderApp(appState)

// -----------------------------------------------  step2: 需要将这种模式单独抽离出来 -------------------------------------

// function renderApp(appState) {
// 	console.log('app')

// 	renderTitle(appState.title)
// 	renderContent(appState.content)
// }

// function renderTitle(title) {
// 	console.log('title')

// 	const titleDOM = document.getElementById('title')
// 	titleDOM.innerHTML = title.text
// 	titleDOM.style.color = title.color
// }

// function renderContent(content) {
// 	console.log('content')

// 	const contentDOM = document.getElementById('content')
// 	contentDOM.innerHTML = content.text
// 	contentDOM.style.color = content.color
// }

// const createStore = (state, stateChange) => {
// 	const dispatch = action => stateChange(state, action)
// 	return { dispatch }
// }

// const appState = {
// 	title: {
// 		text: '第一次title text',
// 		color: 'red'
// 	},
// 	content: {
// 		text: '第一次content text',
// 		color: 'blue'
// 	}
// }

// const stateChange = (state, action) => {
// 	switch (action.type) {
// 		case 'UPDATE_TITLE_TEXT':
// 			state.title.text = action.payload
// 			break
// 		case 'UPDATE_TITLE_COLOR':
// 			state.title.color = action.payload
// 			break
// 		default:
// 			break
// 	}
// }
// const store = createStore(appState, stateChange)
// const { dispatch } = store
// renderApp(appState)
// dispatch({ type: 'UPDATE_TITLE_TEXT', payload: '第二次修改的title text' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', payload: 'green' })
// renderApp(appState)

// ------------------------------------  step3: 每次dispatch数据之后都需要手动去调用renderApp去渲染，使用发布订阅去对数据变化进行响应并渲染 -------------------------------------

// function renderApp(appState) {
// 	console.log('app')

// 	renderTitle(appState.title)
// 	renderContent(appState.content)
// }

// function renderTitle(title) {
// 	console.log('title')

// 	const titleDOM = document.getElementById('title')
// 	titleDOM.innerHTML = title.text
// 	titleDOM.style.color = title.color
// }

// function renderContent(content) {
// 	console.log('content')

// 	const contentDOM = document.getElementById('content')
// 	contentDOM.innerHTML = content.text
// 	contentDOM.style.color = content.color
// }

// const createStore = (state, stateChange) => {
// 	const listeners = [] // 存储渲染回调
// 	const getState = () => state // 外部需要获取最新的state传给renderApp
// 	const dispatch = action => {
// 		stateChange(state, action)
// 		listeners.forEach(fn => fn())
// 	}
// 	const subscribe = fn => {
// 		listeners.push(fn)
// 	}
// 	return { dispatch, subscribe, getState }
// }

// const appState = {
// 	title: {
// 		text: '第一次title text',
// 		color: 'red'
// 	},
// 	content: {
// 		text: '第一次content text',
// 		color: 'blue'
// 	}
// }

// const stateChange = (state, action) => {
// 	switch (action.type) {
// 		case 'UPDATE_TITLE_TEXT':
// 			state.title.text = action.payload
// 			break
// 		case 'UPDATE_TITLE_COLOR':
// 			state.title.color = action.payload
// 			break
// 		default:
// 			break
// 	}
// }
// const store = createStore(appState, stateChange)
// const { dispatch, subscribe, getState } = store

// subscribe(() => renderApp(getState()))

// renderApp(appState)
// dispatch({ type: 'UPDATE_TITLE_TEXT', payload: '第二次修改的title text' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', payload: 'green' })

// ------------------------------------  step4: 每次dispatch时虽然只修改其中一个数据但是还是会渲染所有的视图 -------------------------------------
// 需要对两次的state进行判断,所以stateChange需要返回一个新的state

function renderApp(newState, oldState = {}) {
	if (newState === oldState) return
	console.log('app')

	renderTitle(newState.title, oldState.title)
	renderContent(newState.content, oldState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
	if (newTitle === oldTitle) return
	console.log('title')

	const titleDOM = document.getElementById('title')
	titleDOM.innerHTML = newTitle.text
	titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
	if (newContent === oldContent) return
	console.log('content')

	const contentDOM = document.getElementById('content')
	contentDOM.innerHTML = newContent.text
	contentDOM.style.color = newContent.color
}

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
			title: {
				text: '第一次title text',
				color: 'red'
			},
			content: {
				text: '第一次content text',
				color: 'blue'
			}
		}
	}
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			return {
				...state,
				title: {
					...state.title,
					text: action.payload
				}
			}
		case 'UPDATE_TITLE_COLOR':
			return {
				...state,
				title: {
					...state.title,
					color: action.payload
				}
			}
		default:
			break
	}
}

const store = createStore(reducer)
const { dispatch, subscribe, getState } = store

let oldState = getState()

subscribe(() => {
	renderApp(getState(), oldState)
	oldState = getState()
})

renderApp(getState())

dispatch({ type: 'UPDATE_TITLE_TEXT', payload: '第二次修改的title text' })

dispatch({ type: 'UPDATE_TITLE_COLOR', payload: 'green' })
