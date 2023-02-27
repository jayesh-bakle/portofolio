import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
// import Form from '../components/Form';
import Contact_us from '../components/Contact_us';

const Contact = () => {
  return(
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text = "Lets have a chat"/>
      <Contact_us/>
      <Footer/>
    </div>
  );
};

export default Contact