'use client';

import {useState} from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting: ${email}`);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Email <input value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign In</button>
        </form>
    );
}