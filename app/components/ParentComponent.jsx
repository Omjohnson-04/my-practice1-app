'use client';

import Child from './ChildComponent';

export default function ParentComponent() {
    const message = "Hello from Parent Component!";
    return (
        <div>
            <h1>Parent</h1>
            <Child message={message} />
        </div>
    );
}