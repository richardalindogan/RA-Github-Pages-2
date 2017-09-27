import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
  render() {
    return (
    	<div className="container" id="contactContain">
    		<div className="row">
	    		<div className="col" id="contactDescription">
	            	<h1 className="titleSet">Contact</h1>
	            	<p className="sectionDescription">
	            		Like my style?<br></br>
	                    I’m currently looking for a job in UX design, web development, or software engineering.<br></br>
	                    Here are some ways to get in touch with me.<br></br>
	                    Feel free to say hi!
	                </p>   
	    		</div>
    			<div className="col" id="contactInfo">
	    			<p className="leftSection sectionDescription">
	    				Cell: 201-618-6807<br></br>
	    				Home: 201-498-9732<br></br>
	    				Email: richardalindogan@gmail.com<br></br>
	    			</p>
	    		</div>
    		</div>
    	</div>
    );
  }
}

export default Contact;