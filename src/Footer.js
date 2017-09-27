import React, { Component } from 'react';
import './Footer.css';
import face from './visual assets/icons/signature.png';
import twitter from './visual assets/icons/twitter.svg';
import tumblr from './visual assets/icons/tumblr.svg';
import linkedin from './visual assets/icons/linkedIn.svg';
import github from './visual assets/icons/github.svg';
import selfie from './visual assets/selfie.png';

class Footer extends Component{
  	render() {
    	return (
    		<div className="container justify-content-center" id="footerContain">
    			<div id="links" className="row justify-content-center">
    				<a href="https://twitter.com/RichDogan" target="_blank"><img className="socialIcons" src={twitter} /> </a>
                   	<a href="http://richdogan.tumblr.com/" target="_blank"><img className="socialIcons" src={tumblr} /> </a>
                   	<a href="https://www.linkedin.com/in/ralindogan" target="_blank"><img className="socialIcons" src={linkedin} /> </a>
                   	<a href="https://github.com/richardalindogan" target="_blank"><img className="socialIcons " src={github} /> </a>
    			</div>
    			<div id="end" className="row justify-content-center">
    				<p>--- Developed by</p>
    				<img id="signature" src={face} />
    				<p>2017 ---</p>
    			</div>
    		</div>
    	);
	}
}

export default Footer;