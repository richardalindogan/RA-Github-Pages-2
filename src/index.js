import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import './normalize.css';
import './site.css';
import './animations.css';

ReactDOM.render(<App />, document.getElementById('Home'));
ReactDOM.render(<About />, document.getElementById('About'));
ReactDOM.render(<Portfolio />, document.getElementById('Portfolio'));
ReactDOM.render(<Contact />, document.getElementById('Contact'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
registerServiceWorker();
