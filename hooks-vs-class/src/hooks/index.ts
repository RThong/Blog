import { useState, useEffect } from 'react';

export const useSize = () => {
    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        // @ts-ignore
        window.onresize = e => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        return () => {
            window.onresize = null;
        };
    }, []);
    return state;
};

export const useMouse = (ref: React.RefObject<Element>) => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    useEffect(() => {
        const temp = ref.current;
        const moveHandler = (event: MouseEvent) => {
            if (ref?.current) {
                setState({
                    x: event.clientX,
                    y: event.clientY
                });
            }
        };
        // @ts-ignore
        temp.addEventListener('mousemove', moveHandler);

        return () => {
            // @ts-ignore
            temp.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);

    return state;
};
