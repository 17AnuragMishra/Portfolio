import React from 'react'
import { motion } from "framer-motion";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';


type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        viewport={{once:true}}
        src="https://i.postimg.cc/CLwnmNff/banner-01-jpg.png" className='-mb-28 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'/>
        <div className='space-y-8 px-0 md:px-8 flex items-center flex-col'>
            <p className='text-base'>Greetings! I am <b style={{color:'#F7AB0A'}}>Anuarg Mishra</b>, I am a tech enthusiast pursuing a Bachelor of Technology in Computer Science Engineering. I have had an interest in technology from an early age and I am planning to pursue a career in software development or web development. Whether it is academic or extracurricular activities, I am always ready to learn and dive deep into new technology, regardless of the level of dedication required.<br /> <br/>
                Willing to give me an opportunity or feel like I really worth it, here is the resume you can take into consideration <SwipeDownAltIcon/></p>
            <a href='https://drive.google.com/uc?export=download&id=1xD_N-wmyL0iqss7Hpo8HP7aQiKiDTo7F' > <button className='bg-[#ff9b20] p-2 text-lg hover:bg-[#ff9b20]/90 rounded-md text-gray-100'> <DownloadForOfflineIcon/> Download </button> </a>
        </div>
    </motion.div>
  )
}

export default About