import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Specialization.css'; // Importing the CSS

const AboutMe = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  const handleNavigateBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleViewCertificate = () => {
    window.open('https://coursera.org/verify/specialization/YBDLLY8FLB3C', '_blank'); // Replace with your certificate link
  };

  return (
    <div className="about-me-container">
      <div className="about-me-page">
        {/* About Me Section */}
        <div className="about-me-content">
          <div className="about-me-left">
            <h2 className="about-me-title">Specialized in</h2>
            <button className="about-me-button" onClick={handleViewCertificate}>
              Machine Learning
            </button>
          </div>
          
          <div className="about-me-right">
            <h2 className="about-me-title">Research Fields</h2>
            <ul className="about-me-research-list">
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Optimization Algorithms</li>
            </ul>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="about-me-buttons">
          <button className="about-me-button" onClick={handleNavigateBack}>
            Go Back
          </button>
          <button className="about-me-button" onClick={handleNavigateToContact}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
