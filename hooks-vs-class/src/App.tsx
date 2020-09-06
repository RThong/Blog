import React, { useEffect, useState } from 'react';
import Test from './test';
import 'antd/dist/antd.css';
const App = () => {
    const [id, setId] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setId(2);
        }, 1000);
        setTimeout(() => {
            setId(1);
        }, 2000);
    }, []);
    return (
        <div>
            <Test />
            {/* <Index /> */}
        </div>
    );
};

export default App;
