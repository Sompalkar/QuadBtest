 


 import React from 'react';
import './Navbar.css';  
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const Navbar = () => {
  return (
    <div className="navbar">
      <Fade left>
      <div className="logo">MovieFlix</div>

      </Fade>
      <div className="nav-links">
         
        <div className='nav-links-option'>
          
        <div> <Link to='/'>Home</Link> </div>
        </div>
        <div className='nav-links-option'>
            
        <div> <Link to="">About</Link> </div>
        </div>
        <div className='nav-links-option'>
            
          
          <div> <Link>Services</Link></div> 
        </div>
        <div className='nav-links-option'>
          <Link>Contact</Link> 
        </div>
         
      </div>
    </div>
  );
};

export default Navbar;

 