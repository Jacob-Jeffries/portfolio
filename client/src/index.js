import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import App from './App.js';
import Footer from './components/Footer.js';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById("main-content"));
ReactDOM.render(<Footer />, document.getElementById("footer"));