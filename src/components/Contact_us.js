import React from 'react'
import "./Contact_us.css"
import {MdOutlineEmail} from 'react-icons/md'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


    const Contact_us = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_1x5w7xs', 'template_ybrw18s', form.current, 'qiFVRGCVLuZ8l8a6E')

          e.target.reset();
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });
        };



  return (
    <section id='contact'>
        <h4 className='get'> Get In Touch</h4>


        <div className='container contact-container'>
            <div className='contact_options'>
                <article className='contact_option'>
                    <MdOutlineEmail size={35} style={{color:'white',marginRight:"0rem",marginBottom:"1rem"}}/>
                    <h4>Email</h4>
                    <h5>jayeshbakleabd@gmail.com</h5>
                    <a href='mailto:jayeshbakleabd@gmail.com' target="_blank">Send a message</a>
                    
                </article>

                <article className='contact_option'>
                    <FaFacebookMessenger size={35} style={{color:'white',marginRight:"0rem",marginBottom:"1rem"}}/>
                    <h4>Messengers</h4>
                    <h5>jayeshbakle</h5>
                    <a href='https://m.me/ernest.achiever' target="_blank">Send a message</a>
                    {/* In this href we have to write our unique id from the facebook web */}
                </article>

                <article className='contact_option'>
                    <FaWhatsapp size={35} style={{color:'white',marginRight:"0rem",marginBottom:"1rem"}}/>
                    <h4>WhatsApp</h4>
                    <a href='https://api.whatsapp.com/send?phone+916359269287' target="_blank">WhatsApp Me </a>
                </article>

            </div>


            {/* End of the contact form */}
            <h2 className='me'>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn'>Send Message</button>
            </form>
        </div>
    </section>
  );
};

export default Contact_us