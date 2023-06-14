import React from 'react';

// Header component
const Header = () => {
  return (
    // Wrapper div with custom styling
    <div style={{ padding: "0px 0px 0px 0px", marginTop: "-8px" }}>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        {/* Container fluid */}
        <div className="container-fluid" style={{ backgroundColor: 'black' ,padding:'5px 5px'}}>
          {/* Brand link */}
          <a className="navbar-brand" style={{ color: 'white',fontFamily: 'Georgia' }} href="/">LUXORA</a>
          {/* Navbar toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar collapse */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* Navbar links */}
            <div className="navbar-nav">
              {/* Active home link */}
              <a className="nav-link active" aria-current="page" style={{ color: 'white' }} href="/">Home</a>
              {/* Categories link */}
              <a className="nav-link" href="/"  style={{ color: 'white'}}>Categories</a>
              {/* Cart link */}
              <a className="nav-link" href="/" style={{ color: 'white' }}>My-Cart</a>
              {/* Login link */}
              <a className="nav-link" href="/" style={{ color: 'white' }}>Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
