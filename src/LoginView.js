// src/LoginView.js

import React from 'react';

function LoginView() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginView;