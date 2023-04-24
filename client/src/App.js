import React, { useState } from 'react';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Education from './components/Education.js';
import Research from './components/Research.js';
import Navbar from './components/Navbar.js';


function App() {
  const [activeTab, setActiveTab] = useState('About');

  function handleClick(tabName) {
    setActiveTab(tabName);
  }

  let componentToRender;
  if (activeTab === 'About') {
    componentToRender = <About />;
  } else if (activeTab === 'Portfolio') {
    componentToRender = <Portfolio />;
  } else if (activeTab === 'Education') {
    componentToRender = <Education />;
  } else if (activeTab === 'Research') {
    componentToRender = <Research />;
  }

  return (
    <div>
      <Navbar activeTab={activeTab} handleClick={handleClick} />
      {componentToRender}
    </div>
  );
}

export default App;
