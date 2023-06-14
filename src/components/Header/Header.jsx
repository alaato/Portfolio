// eslint-disable-next-line no-unused-vars
import React from "react";
import './Header.css'
import CTA from './CTA'
import Portrait from '../../assets/Portriat.jpg'
import Socials from './Socials'
import { motion } from "framer-motion"
const Header = ()=>{
    return (
        <header>
            <motion.section
            className="container header-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            
            transition={{
                ease: "linear",
                duration: 0.5
              }}
            >
                <h2>Hello, I am</h2>
                <h1>Alaa Edden</h1>
                <h2>Junior Full-Stack Developer</h2>
                <p>My name is Alaa Edden or simply Alaa,
                     I am Computer engineering student graduating this month,
                      my Passion is full-stack development and have made couple of projects using technologies such as Node.js MongoDb and express.</p>
                <CTA/>
                <div className="image">
                    <img className = 'img'src={Portrait} alt="" />
                </div>
                <a href="#contact" className="Scroll-down">Scroll Down</a>
                <Socials/>
            </motion.section>

        </header>
        )
}
export default Header