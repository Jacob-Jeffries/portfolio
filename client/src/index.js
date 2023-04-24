import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js'
import Navbar from './components/Navbar.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Navbar />, document.getElementById("navbar"));
