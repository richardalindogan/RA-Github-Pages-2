import React, { Component } from 'react';
import './About.css';
import twitter from './visual assets/icons/twitter.svg';
import tumblr from './visual assets/icons/tumblr.svg';
import linkedin from './visual assets/icons/linkedIn.svg';
import github from './visual assets/icons/github.svg';
import selfie from './visual assets/selfie.png';
class About extends Component{
  render() {
    return (
    	<div className="container" id="aboutContain">
            <div className="row">
                <div className="col">
                    <img id="cartoon" src={selfie}/>
                </div>
                <div className="col animatedParent animateOnce" id="aboutDesc">
                    <h1 className="titleSet">About Me</h1>
                    <p className="sectionDescription">An artist, a designer, and a software engineer rolled into one!<br></br>
                        A person with many interests, I constantly branch out to try new things.<br></br>
                        Always learning and always growing.<br></br>
                    </p>
                   <a href="https://twitter.com/RichDogan" target="_blank"><img className="socialIcons animated fadeInRight delay-250" src={twitter} /> </a>
                   <a href="http://richdogan.tumblr.com/" target="_blank"><img className="socialIcons animated fadeInRight delay-500" src={tumblr} /> </a>
                   <a href="https://www.linkedin.com/in/ralindogan" target="_blank"><img className="socialIcons animated fadeInRight delay-750" src={linkedin} /> </a>
                   <a href="https://github.com/richardalindogan" target="_blank"><img className="socialIcons animated fadeInRight delay-1000" src={github} /> </a>
                </div>
            </div>
    	</div>
    );
  }
}

export default About;