import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"



const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);


    const[color,setColor] = useState(false);

    const changeColor = ()=>{
        if(window.scrollY>=100)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);




  return(
    <div className={color?("header header-bg"):("header")}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>

        {/* Here we have again added the if and else condition 
        for changing the class name on clicking that particular event */}
        
        <ul className={click? ("nav-menu active" ):"nav-menu"}>
        

        {/*Hence on clicking the class name changes accordingly.  */}
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/project">Project</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to = "/contact">Contact</Link>
            </li>
        </ul>

        {/* This div class is like the if and else condition for the click listener event being called. */}

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size = {40} style={{color:'white'}}/>) : (<FaBars size={40} style={{color:'white'}}/>)} 
        </div>

        {/* i.e if clicked then display hamburger icon otherwise display Bars icons */}
    </div>
  );
};

export default Navbar