import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'white',marginRight:"2rem"}}/>
                    <div>
                        <p> A-401 </p>
                        <p>Satyadeep Heights.</p>
                        <p className='india'>   India.  </p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color:'whitesmoke',marginRight:"2rem"}}/>
                    <div>
                        <h4>91+6359-26-9287</h4>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
                    <p> jayeshbakleabd@gmail.com</p>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p> jsjfkjkjwe FEi hiwe kNWKF</p>
                <div className='social'>
                    <FaLinkedin size={30} style={{color:"white",marginRight:"2rem"}} />
                    <FaTwitter size={30} style={{color:"white",marginRight:"2rem"}} />
                    <FaFacebook size={30} style={{color:"white",marginRight:"2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
};

export default Footer