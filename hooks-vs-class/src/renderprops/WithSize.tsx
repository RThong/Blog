// @ts-nocheck
import React, { Component, ReactNode } from 'react';

export default class WithSize extends Component {
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
        return this.props.children(this.state);
    }
}
