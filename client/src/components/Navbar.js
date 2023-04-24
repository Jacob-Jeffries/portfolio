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
        <li className={activeTab === 'Research' ? 'active' : ''} onClick={() => handleClick('Education')}>
          Research
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
