import React from 'react'
const Context = React.createContext()
const connect = (mapStateToProps, mapDispatchToProps) => {
	let oldState
	return WrapperComponent => {
		class Connect extends React.Component {
			static contextType = Context
			state = {
				allProps: {}
			}

			componentWillMount() {
				const store = this.context
				oldState = mapStateToProps(store.getState())
				this._change(store)
				store.subscribe(() => {
					this._change(store)
				})
			}

			shouldComponentUpdate(props) {
				// 判断直接传入的props是否更改
				if (Object.keys(props).some(key => props[key] !== this.props[key])) {
					return true
				}
				const newState = mapStateToProps(this.context.getState())
				const flag = Object.keys(oldState).some(key => oldState[key] !== newState[key])
				oldState = newState
				return flag
			}

			_change(store) {
				const stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
				const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
				this.setState({
					allProps: {
						...stateProps,
						...dispatchProps
					}
				})
			}
			render() {
				return <WrapperComponent {...this.state.allProps} {...this.props} />
			}
		}
		return Connect
	}
}

// 因为需要和connect共用一个Context所以封装到一起
const Provider = props => {
	return <Context.Provider value={props.store}>{props.children}</Context.Provider>
}

export { Provider, connect }
