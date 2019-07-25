import React from 'react'
const Context = React.createContext()
const connect = (WrapperComponent, mapStateToProps, mapDispatchToProps) => {
	class Connect extends React.Component {
		static contextType = Context
		state = {
			allProps: {}
		}

		componentWillMount() {
			const store = this.context
			this._change(store)

			store.subscribe(() => {
				this._change(store)
			})
		}

		_change(store) {
			const stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
			const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
			this.setState({
				allProps: {
					...stateProps,
					...dispatchProps,
					...this.props
				}
			})
		}
		render() {
			return <WrapperComponent {...this.state.allProps} />
		}
	}
	return Connect
}

// 因为需要和connect共用一个Context所以封装到一起
const Provider = props => {
	return <Context.Provider value={props.store}>{props.children}</Context.Provider>
}

export { Provider, connect }
