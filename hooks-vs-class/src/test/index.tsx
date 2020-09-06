/* -----------------------------     render props    --------------------------------- */
import React, { Component } from 'react';
import Mouse from '../renderprops';
import WithSize from '../renderprops/WithSize';

// @ts-nocheck
export default class index extends Component {
    public render() {
        return (
            <div style={{ height: 500 }}>
                <WithSize>
                    {({ width, height }: { width: number; height: number }) => (
                        <Mouse>
                            {({ x, y }: { x: number; y: number }) => (
                                <div>
                                    <p>
                                        当前的鼠标位置是 ({x}, {y})<br />
                                        窗口大小 宽: {width}, 高: {height}
                                    </p>
                                </div>
                            )}
                        </Mouse>
                    )}
                </WithSize>
            </div>
        );
    }
}
/* -----------------------------     render props    --------------------------------- */

/* -----------------------------     HOC      --------------------------------------- */
// import React, { Component } from 'react';
// import withMouse from '../hoc/withMouse';
// import withSize from '../hoc/withSize';

// const Child = (props: any) => {
//     return (
//         <div style={{ height: 500 }}>
//             <p>
//                 当前的鼠标位置是 ({props.x}, {props.y})<br />
//                 窗口大小 宽: {props.width}, 高: {props.height}
//             </p>
//         </div>
//     );
// };
// const HocComponent = withSize(withMouse(Child));

// export default class index extends Component {
//     public render() {
//         return <HocComponent />;
//     }
// }

/* -----------------------------     HOC      --------------------------------------- */

/* -----------------------------     hook    --------------------------------- */
// import React, { useRef } from 'react';
// import { useMouse, useSize } from '../hooks';

// const Test = () => {
//     const ref = useRef(null);
//     const { x, y } = useMouse(ref);

//     const { width, height } = useSize();

//     return (
//         <div style={{ height: 500 }} ref={ref}>
//             <p>
//                 当前的鼠标位置是 ({x}, {y})<br />
//                 窗口大小 宽: {width}, 高: {height}
//             </p>
//         </div>
//     );
// };

// export default Test;

/* -----------------------------     hook    --------------------------------- */
