// app/component/ChildSender.jsx
'use client';

import { useState } from 'react';
import ChildSender from './ChildSender';

export default function ParentWithCallback() {
    const [msg, setMsg] = useState("");

    const handleSend = (text) => setMsg(text);

    return (
        <div>
            <h1>Parent With Callback</h1>
            <p>From Child: {msg}</p>
            <ChildSender onSend={handleSend}/>
        </div>

    )
}