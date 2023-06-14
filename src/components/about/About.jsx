// eslint-disable-next-line no-unused-vars
import React from "react";
import './About.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import react from '../../assets/react.svg'
import javascript from '../../assets/javascript.svg'
import MongoDb from '../../assets/mongodb.svg'
import git from '../../assets/git.svg'
import rest from '../../assets/api.svg'
import { motion } from "framer-motion"
const About = ()=>{
    return (
        <section id="about">
            
            <motion.div
            className="container"
            >
                <h1>My Skills</h1>
                <motion.ul className="skillGrid">
                    <motion.li  
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={html} alt="" />
                        <h5>Html</h5>
                    </motion.li >
                    <motion.li  
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={css} alt="" />
                        <h5>Css</h5>
                    </motion.li >
                    <motion.li 
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={javascript} alt="" />
                        <h5>Javascript</h5>
                    </motion.li >
                    <motion.li  
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={react} alt="" />
                        <h5>React</h5>
                    </motion.li >
                    <motion.li 
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={MongoDb} alt="" />
                        <h5>MongoDb</h5>
                    </motion.li >
                    <motion.li
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={git} alt="" />
                        <h5>Git</h5>
                    </motion.li >
                    <motion.li  
                    whileHover={{scale:1.5}}
                    className="item">
                        <img src={rest} alt="" />
                        <h5>Rest api</h5>
                    </motion.li >
                    
                </motion.ul>
            </motion.div>
        </section>
    )
}
export default About