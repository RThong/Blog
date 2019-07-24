import React from 'react'
const Context = React.createContext()
const connect = WrapperComponent => {
	class Connect extends React.Component {
		static contextType = Context
		state = {
			allProps: {}
		}

		componentWillMount() {
			const store = this.context
			this.setState({
				allProps: store.getState()
			})
			store.subscribe(() => {
				this.setState({
					allProps: store.getState()
				})
			})
		}
		_change(e) {
			const { dispatch } = this.context

			dispatch({ type: 'CHANGE_COLOR', payload: e })
		}
		render() {
			return <WrapperComponent {...this.state.allProps} change={e => this._change(e)} />
		}
	}
	return Connect
}

// 因为需要和connect共用一个Context所以封装到一起
const Provider = props => {
	return <Context.Provider value={props.store}>{props.children}</Context.Provider>
}

export { Provider, connect }
