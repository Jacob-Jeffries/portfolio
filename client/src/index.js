import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Navbar />, document.getElementById("navbar"));
ReactDOM.render(<Footer />, document.getElementById("footer"));