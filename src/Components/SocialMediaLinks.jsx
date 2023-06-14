import React from 'react';

// SocialMediaLinks component
const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      {/* Heading */}
      <h4 style={{ textAlign: 'left',fontFamily:'Cormorant', backgroundColor:'burlywood',padding:'10px 10px' }}>Connect With Us</h4>
      
      <div className="social-icons" style={{ textAlign: 'left',backgroundColor:'#FFEBAD',padding:'10px 10px' }}>
        {/* Facebook link */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ fontSize: '44px', padding: "10px" }}></i>
        </a>

        {/* Twitter link */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ fontSize: '44px', padding: "10px" }}></i>
        </a>

        {/* Instagram link */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ fontSize: '44px', padding: "10px" }}></i>
        </a>

        {/* Add more social media links/icons as needed */}
      </div>
    </div>
  );
};

export default SocialMediaLinks;


