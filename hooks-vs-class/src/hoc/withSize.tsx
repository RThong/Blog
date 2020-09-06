// @ts-nocheck
import React, { Component, ReactNode, ComponentType } from 'react';

const withSize = (WrappedComponent: ComponentType<any>) => {
    class Size extends Component {
        public state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        public componentDidMount() {
            window.onresize = () => {
                this.setState({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };
        }

        public componentWillUnmount() {
            window.onresize = null;
        }

        public render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    }
    return Size;
};
export default withSize;
