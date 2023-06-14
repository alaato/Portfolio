// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Nav.css'
import {BsFillHouseHeartFill, } from "react-icons/bs"
import { AiFillProject,AiFillContacts,AiOutlineUser } from "react-icons/ai";



const Nav = ()=>{
const [active, setActive] = useState('#')

    return (
        <nav>
            
                
            <a href="#" onClick={() => setActive('#')} className={active==='#'&&'active'}>
                <BsFillHouseHeartFill/>
            </a>
            
            <a
                href="#about"
                onClick={() => setActive('#about')} className={active==='#about'&&'active'}
            >
                <AiOutlineUser/>
            </a>

            <a
                href="#projects"
                onClick={() => setActive('#projects')} className={active==='#projects'&&'active'}
            >
                <AiFillProject/>
            </a>
            
            <a
               href='#contact'
               onClick={() => setActive('#contact')} className={active==='#contact'&&'active'}
            >
                <AiFillContacts/>
            </a>
            
            
            
           
        </nav>
    )
}
export default Nav