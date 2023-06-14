// eslint-disable-next-line no-unused-vars
import React from "react";
import Zno from '../../assets/Zno.png'
import campAdvisor from "../../assets/campadvisor.png"
import Project from './Project'
import './Projects.css';
import { motion } from "framer-motion"
const CardText1 = 'NewEnglish is an Engilsh Courses web app where students can subscribe to courses and post thier questions'
const Tech1 = 'node.js-express-mongoDb-ejs'
const CardText2 = 'CampAdvisor is a camp rating crud web app where users can make, rate and edit camps' 
const Projects = ()=>{
    return (
        <section id="projects">
            <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             
             transition={{
                 ease: "linear",
                 duration: 0.6
               }}
            className="container project-container">
            <h1>Projects</h1>
            <Project image={Zno} text={CardText1} tech={Tech1} title={'NewEnglish'} live={"https://newenglsih.onrender.com/"} github={"https://github.com/alaato/NewEnglish"}></Project>
            <Project image={campAdvisor} text={CardText2} tech={Tech1} title={'CampAdvisor'} live={'https://campadvsior.onrender.com/'} github={'https://github.com/alaato/CampAdvisor'}></Project>
            </motion.div>
        </section>
    )
}
export default Projects