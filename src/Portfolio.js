import React, { Component } from 'react';
import './Portfolio.css';
import strutt from './visual assets/portfolio/strutt_small.png';
import sorcera from './visual assets/portfolio/sc_banner_coming_soon.png';

class Portfolio extends Component{
  render() {
    return (
    	<div className="container" id="portfolioContain">
        <h1 className="titleSet">Portfolio</h1>
        <div className="row justify-content-center animatedParent">
          {/*Improve code to automate carousel agreggation*/}
          <a href="https://strutt.herokuapp.com/" target= "_blank"><img className="carouselItems animated fadeInLeft" src={strutt}/></a>
          <a><img id="strutt" className="carouselItems animated fadeInRight" src={sorcera}/></a>

        </div>
    	</div>
    );
  }
}

export default Portfolio;