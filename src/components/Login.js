import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            console.log('Login successful', response.data);
            navigate('/tasks');
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className="login-container">
            <header className="header">
                <h1>XYZ_INTERN</h1>
                <div className="nav">
                    <img className="header-logo" src={logo} alt="Company Logo" />
                    <Link to="/login">Enter </Link> | <Link to="/signup">Register</Link>
                </div>
            </header>
            <nav className="main-nav">
                <a href="#">Home</a>
                <a href="#">Top</a>
                <a href="#">Groups</a>
                <a href="#">Rating</a>
                <a href="#">Calendar</a>
                <a href="#">Help</a>
            </nav>
            <div className="login-form-container">
                <div className="info-text">
                    <p><strong>Fill in the form to login into IPR Portal.</strong></p>
                    <p>You can use <a href="#">Gmail</a> as an alternative way to enter.</p>
                </div>
                <div className="login-form-box">
                    <h2>Login into IPR Portal</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Handle/Email</label>
                            <input type="text" placeholder="Handle/Email" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group-remember">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me for a month</label>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="button">Login</button>
                        </div>
                    </form>
                    <a href="#" className="forgot-password">Forgot your password?</a>
                    <a href="#" className="use-gmail">Use Gmail</a>
                </div>
            </div>
            <footer className="footer">
                <p>IPR Profile (c) Copyright 20XX-20XX Niyath&amp;Chaital</p>
                <p>Server time: Jul/12/2024 17:17:21 UTC</p>
                <p>Desktop version, switch to <a href="#">mobile version</a></p>
                <p><a href="#">Privacy Policy</a></p>
                <p>Supported by</p>
                <img className="footer-logo" src={logo} alt="IPR Logo" />
            </footer>
        </div>
    );
}

export default Login;
