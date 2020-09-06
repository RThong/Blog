import React, { Component, ReactNode, ComponentType } from 'react';

const withMouse = (WrappedComponent: ComponentType<any>) => {
    class Mouse extends Component {
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
                <div onMouseMove={this.handleMouseMove}>
                    <WrappedComponent {...this.state} {...this.props} />
                </div>
            );
        }
    }
    return Mouse;
};
export default withMouse;
