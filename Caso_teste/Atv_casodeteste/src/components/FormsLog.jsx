import React, { useState } from 'react';

const FormsLog = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        
        const registeredUser = {
            username: 'user123',
            password: 'password123',
        };

        if (username === registeredUser.username && password === registeredUser.password) {
            setIsRegistered(true);
            setMessage('Login confirmado com sucesso!');
        
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Tela de Login</h1>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: '10px', padding: '5px' }}
                />
                <br />
                <input
                    type="senha"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '10px', padding: '5px' }}
                />
                <br />
                <button onClick={handleLogin} style={{ padding: '5px 10px' }}>
                    Login
                </button>
            </div>
            {message && (
                <div style={{ marginTop: '20px', color: isRegistered ? 'green' : 'red' }}>
                    {message}
                </div>
            )}
        </div>
    );
};



export default FormsLog