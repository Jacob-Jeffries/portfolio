import React from 'react';

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="./assets/images/favicon.ico" alt="Navbar toggle button"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#mc00">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mc01">Online Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mc02">Education & Training</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mc03">Research Publications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/Jacob-Jeffries" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="mailto:jeffries.info@gmail.com">Email Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
