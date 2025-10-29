'use client';

import {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={() => setCount(c => c - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}