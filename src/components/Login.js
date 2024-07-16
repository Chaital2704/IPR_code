import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add login logic here
        navigate('/tasks');
    };

    return (
        <div className="login-container">
            <header className="header">
                <h1>XYZ_INTERN</h1>
                <div className="nav">
                    <img className="header-logo" src={logo} alt="Company Logo" />
                    <Link to="/login">Enter</Link> | <Link to="/signup">Register</Link>
                </div>
            </header>
            <nav className="main-nav">
                {/* Task Page */}
                <a href="#">Home</a>
                {/* Ranking */}
                <a href="#">Top</a> 
                {/* <a href="#">Catalog</a> */}
                {/* Community */}
                <a href="#">Groups</a>
                {/* Ranting Overall*/}
                <a href="#">Rating</a>
                {/* <a href="#">Edu</a>
                <a href="#">API</a> */}
                {/* Task Calender */}
                <a href="#">Calendar</a>
                {/* ask doubts */}
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
                            <input type="text" placeholder="Handle/Email" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me for a month</label>
                        </div>
                        <button type="submit" className="button">Login</button>
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
