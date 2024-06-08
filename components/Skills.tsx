import React from 'react';
import { motion } from "framer-motion";
import Skill from '@/components/Skill'
import htmlLogo from '../Assets/htmllogo.webp';
import CSSLogo from '../Assets/CSS.webp';
import ReactLogo from '../Assets/ReactLogo.png';
import TailwindCSS from '../Assets/tailwindcss.png';
import JavascriptLogo from '../Assets/JavaScript-logo.png';
import PostmanLogo from '../Assets/postman.png';
import VSCodeLogo from '../Assets/VSCodeLogo.jpg';
import CPPLogo from '../Assets/CPPLogo.png';
import JavaLogo from '../Assets/Java.jpeg';
import PythonLogo from '../Assets/pythonLogo.png';
import GithubLogo from '../Assets/GithubLogo.png';

type Props = {}

function Skills({}: Props) {
    let pythonLogo;
    return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill proficiency={93} name="C++" icon={CPPLogo}/>
            <Skill proficiency={90} name="C++" icon={PythonLogo}/>
            <Skill proficiency={85} name="C++" icon={JavaLogo}/>
            <Skill proficiency={90} name="C++" icon={JavascriptLogo}/>
            <Skill proficiency={80} name="C++" icon={ReactLogo}/>
            <Skill proficiency={85} name="C++" icon={PostmanLogo}/>
            <Skill proficiency={80} name="C++" icon={TailwindCSS}/>
            <Skill proficiency={77} name="C++" icon={GithubLogo}/>
            <Skill proficiency={95} name="C++" icon={htmlLogo}/>
            <Skill proficiency={90} name="C++" icon={VSCodeLogo}/>
            <Skill proficiency={85} name="C++" icon={CSSLogo}/>
        </div>
    </motion.div>
  )
}

export default Skills