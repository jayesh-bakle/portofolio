import React from 'react'
import "./Heroimg.css"
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
import CV from "../assets/cv.pdf"


const Heroimg = () => {
  return (
    <div className='hero'>
       <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg"></img>
        </div> 

        <div className='content'>
            <p>Hi,I am Jayesh Bakle</p>
            <h1> React Developer.</h1>
            <div>
            <a href={CV} download className='btn '>Download CV</a>
                {/* <Link to="/project" className="btn">Projects</Link> */}
                <Link to="/contact" className='btn-light'>Contacts</Link>
            </div>
            
        </div>
    </div>
  );
};

export default Heroimg