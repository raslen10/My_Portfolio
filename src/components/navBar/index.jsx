import React, { useState } from "react";
import {FaReact} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import './styles.scss';

const data =[
    {
    label : 'HOME',
    to : '/'
    },
    {
    label : 'ABOUT ME',
    to : '/about'
    },
    {
    label : 'SKILLS',
    to : '/skills'
    },
    {
    label : 'RESUME',
    to : '/resume'
    },
    {
    label : 'PORTFOLIO',
    to : '/portfolio'
    },
    {
    label : 'CONTACT',
    to : '/contact'
    }
]


const Navbar = ()=>{
    const[toggleIcon, setToggleIcon] = useState(false)
    const handleToggleicon = ()=>{
    setToggleIcon(!toggleIcon)

    }
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">

                    <Link to={'/'} className="navbar__container__logo">
                    <FaReact size={30}/>
                    </Link>

                </div>
                <ul 
                className= {`navbar__container__menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item,key)=>(
                            <li key={key} className="navbar__container__menu__item">
                            <Link to={item.to} className="navbar__container__menu__item__links">
                            {item.label}
                            </Link>
                            
                            </li>
                        ))
                    }
                </ul>
                <div className="nav_icon" onClick={handleToggleicon}>
                    {
                        toggleIcon? <HiX size={30}/> : <FaBars size={30}/>
                    } 

                </div>
            </nav>



        </div>
    )
}
export default Navbar;