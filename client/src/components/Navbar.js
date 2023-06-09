import React from 'react';

function Navbar(props) {
  const { activeTab, handleClick } = props;

  return (
    <nav>
      <ul>
        <li className={activeTab === 'About' ? 'active' : ''} onClick={() => handleClick('About')}>
          About Me
        </li>
        <li className={activeTab === 'Portfolio' ? 'active' : ''} onClick={() => handleClick('Portfolio')}>
          Portfolio
        </li>
        <li className={activeTab === 'Education' ? 'active' : ''} onClick={() => handleClick('Education')}>
          Education
        </li>
        <li className={activeTab === 'Research' ? 'active' : ''} onClick={() => handleClick('Research')}>
          Research
        </li>
        <li className={activeTab === 'Contact' ? 'active' : ''} onClick={() => handleClick('Contact')}>
          Contact Me
        </li>
        <li>
          <a href="./assets/Jeffries_Resume.pdf" target='_blank'>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
