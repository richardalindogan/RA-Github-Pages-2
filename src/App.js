import React, { Component } from 'react';
import './App.css';
import logo from './visual assets/pencil.png';
import point from './visual assets/point.png';

class App extends Component {
  render() {
    return (
      <div className="container" id="homepage">
          {/*Navbar*/}
          <div>
            <nav className="nav justify-content-center" id="landingNav"><ul>
              <li className="nav-item" id="navbar"><a className="nav-link" href="#Portfolio">Portfolio</a></li>
              <li className="nav-item" id="navbar"><a className="nav-link" href="#About">About</a></li>
              <li className="nav-item" id="navbar"><a className="nav-link" href="#Contact">Contact</a></li>
            </ul></nav>
          </div>
          {/*Logo*/}
          <div>
            <h2 className="logoName">Richard</h2>
            <img id="logo" src={logo} alt={"logo"}/>
            <h2 className="logoName">Alindogan</h2>
            <h1 id="design"className="logoTag">Design</h1>
            <h1 id="dot" className="logoTag"> . </h1>
            <h1 id="draw"className="logoTag">Draw</h1>
            <h1 id="dotTwo" className="logoTag"> . </h1>
            <h1 id="develop"className="logoTag">Develop</h1>
          </div>
          <div id="pointer">
            <a href="#Portfolio">
              <h1>Portfolio</h1>
              <img src={point} alt={"[point"}/>
            </a>
          </div>
      </div>
    );
  }
}

export default App;
