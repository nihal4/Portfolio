import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation
import '../styles/Contact.css';

const Contact = () => {
  const navigate = useNavigate(); // Create a navigate object for navigation

  const goHome = () => {
    navigate('/');  // Navigate to the homepage (adjust the path if necessary)
  };

  const goBack = () => {
    navigate(-1);  // Navigate back to the previous page
  };

  return (
    <div className="contact-container">
      <div className="contact-page">
        <main className="contact-content">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-description">Feel free to reach out through any of the platforms below!</p>
          <div className="contact-links">
            <a className="contact-link" href="https://www.facebook.com/Nihal.ODriscoll" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="contact-link" href="https://github.com/nihal4" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-link" href="mailto:sm.nihal4@gmail.com">Email</a>
          </div>
          {/* Home and Back buttons */}
          <div className="contact-buttons">
            <button className="home-button" onClick={goHome}>Home</button>
            <button className="back-button" onClick={goBack}>Back</button>
          </div>
        </main>
        <footer className="contact-footer">
          <p>&copy; 2024 Nihal Ahmed | All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
