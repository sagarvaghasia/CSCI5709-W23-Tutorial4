import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'https://express-t4.onrender.com/api/login',
                { username: email, password }
            );
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            window.location.href = '/profileListing';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='body'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                </div>
                <div>
                {/* <br /> */}
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
