// @ts-nocheck
import React, { Component, ReactNode } from 'react';

export default class Mouse extends Component {
    public state = {
        x: 0,
        y: 0
    };

    public handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };
    public render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.children({ x: this.state.x, y: this.state.y })}
            </div>
        );
    }
}
