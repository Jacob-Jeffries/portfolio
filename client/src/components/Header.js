import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><h1>Jacob Jeffries<br/>Online Portfolio</h1></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="./assets/images/favicon.ico" alt="Navbar toggle button"/>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#mc00">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mc01">Online Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mc02">Education & Training</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mc03">Research Publications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/Jacob-Jeffries" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:jeffries.info@gmail.com">Email Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
