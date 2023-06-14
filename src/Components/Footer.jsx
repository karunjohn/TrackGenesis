import React from 'react';

// Footer component
const Footer = () => {
  return (
    // Footer container
    <footer style={{ backgroundColor: "black", color: 'white', margin: "0px -12px",padding:'10px 10px' }}>
      <div className="footer-content" style={{ textAlign: 'right',fontSize:'14px' }}>
        <div className="left-section">
          <span>&copy; 2023 Track Genesis, All rights reserved &#x24B8;</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
