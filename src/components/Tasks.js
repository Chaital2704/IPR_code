import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Tasks.css';
import logo from '../Assets/logo.png';

const Tasks = () => {
    const tasks = [
        {
            id: 1,
            name: 'Complete Onboarding Process',
            description: 'Finish all onboarding documentation and setup your work environment.',
            created: '1 day ago',
            students: 50,
        },
        {
            id: 2,
            name: 'Attend Orientation Meeting',
            description: 'Join the orientation meeting to learn about company policies and procedures.',
            created: '2 days ago',
            students: 50,
        },
        {
            id: 3,
            name: 'Team Introduction',
            description: 'Introduce yourself to your team and understand your role and responsibilities.',
            created: '3 days ago',
            students: 50,
        },
        {
            id: 4,
            name: 'Complete Initial Training',
            description: 'Complete the initial training sessions assigned to you.',
            created: '4 days ago',
            students: 50,
        },
        {
            id: 5,
            name: 'Start Working on Assigned Project',
            description: 'Begin work on the project assigned by your supervisor.',
            created: '5 days ago',
            students: 50,
        },
    ];

    return (
        <div className="tasks-container">
            <header className="header">
                <h1>XYZ_INTERN</h1>
                <div className="nav">
                    <img className="header-logo" src={logo} alt="Company Logo" />
                    <Link to="/login">Logout</Link> | <Link to="/portfolio">Portfolio</Link>
                </div>
            </header>
            <nav className="main-nav">
                {/* Task Page */}
                {/* <a href="#">Home</a> */}
                {/* Ranking */}
                <a href="#">Top</a> 
                {/* <a href="#">Catalog</a> */}
                {/* Community */}
                <a href="#">Groups</a>
                {/* Ranting Overall*/}
                <a href="#">Rating</a>
                {/* <a href="#">Edu</a>
                <a href="#">API</a> */}
                {/* Task Calendar */}
                <a href="/calendar">Calendar</a>
                {/* ask doubts */}
                <a href="#">Help</a>
            </nav>
            <div className="tasks-content">
                <div className="courses-table">
                    <h2>Tasks</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Created</th>
                                <th>Interns</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>
                                        <strong>{task.name}</strong>
                                        <p>{task.description}</p>
                                    </td>
                                    <td>{task.created}</td>
                                    <td>
                                        <button className="enroll-button">Enroll</button>
                                        <span>{task.students}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="about-company">
                    <h3>About Our Company</h3>
                    <p>Welcome to XYZ Corporation! We are thrilled to have you join us as an intern. This section will provide you with the necessary information and instructions to get you started.</p>
                    <p>During your internship, you will be involved in various tasks and projects that will help you develop your skills and gain valuable experience. Please make sure to complete all the onboarding documentation and set up your work environment.</p>
                    <p>We have an orientation meeting scheduled where you will learn about our company policies and procedures. It's also a great opportunity to meet your team and understand your role and responsibilities.</p>
                    <img className="about-company-logo" src={logo} alt="Company Logo" />
                </div>
            </div>
            <div className="recent-actions">
                <h3>Recent actions</h3>
                <p>Recent actions is empty now</p>
            </div>
            <footer className="footer">
                <p>IPR Platform (c) Copyright 20XX-20XX Niyath&amp;Chaital</p>
                <p>Server time: Jul/12/2024 17:24:44 UTC</p>
                <p>Desktop version, switch to <Link to="#">mobile version</Link></p>
                <p><Link to="#">Privacy Policy</Link></p>
                <p>Supported by</p>
                <img className="footer-logo" src={logo} alt="IPR Logo" />
            </footer>
        </div>
    );
};

export default Tasks;
