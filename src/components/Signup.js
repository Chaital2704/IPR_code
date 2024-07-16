import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../Styles/signup.css'
import logo from '../Assets/logo.png'

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add signup logic here
        navigate('/tasks');
    };

    return (
        <div className="register-container">
            <header className="header">
                <h1>XYZ_INTERN</h1>
                <div className="nav">
                    <img className="header-logo" src={logo} alt="Company Logo" />
                    <Link to="/login">Enter</Link> | <Link to="/signup">Register</Link>
                </div>
            </header>
            <nav className="main-nav">
                <a href="#">Home</a>
                <a href="#">Top</a>
                <a href="#">Catalog</a>
                <a href="#">Groups</a>
                <a href="#">Rating</a>
                <a href="#">Edu</a>
                <a href="#">API</a>
                <a href="#">Calendar</a>
                <a href="#">Help</a>
            </nav>
            <div className="register-form-container">
                <div className="info-text">
                    <p><strong>Fill in the form to register in XYZ.</strong></p>
                    <p>You can skip this step and login with your <a href="#">Gmail</a>.</p>
                </div>
                <div className="register-form-box">
                    <h2>Register in IPR Portal</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Handle</label>
                            <input type="text" placeholder="Handle" required />
                            <small>This means your username (nickname) on the IPR Portal. Be careful! You will be able to change it only once in the first 7 days after registration.</small>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" required />
                            <small>Password should contain at least five characters.</small>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className="button">Register</button>
                    </form>
                    <p>If you have already registered before, but have not received a confirmation email, please click the <a href="#">link</a>.</p>
                    <a href="#" className="use-gmail">Use Gmail</a>
                </div>
            </div>
            <footer className="footer">
                <p>Codeforces (c) Copyright 20XX-20XX Niyath&amp;Chaital</p>
                <p>The only programming contests Web 2.0 platform</p>
                <p>Server time: Jul/12/2024 17:22:59 UTC</p>
                <p>Desktop version, switch to <a href="#">mobile version</a></p>
                <p><a href="#">Privacy Policy</a></p>
                <p>Supported by</p>
                <img className="footer-logo" src={logo} alt="IPR Logo" />
            </footer>
        </div>
    );
}

export default Signup;
