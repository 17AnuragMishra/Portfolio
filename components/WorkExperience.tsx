import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import Sugarcane from '../Assets/sugarcaneAI.jpeg';
import eduNet from '../Assets/eduNet.png';
import Python from '../Assets/pythonLogo.png';
import TensorFlow from '../Assets/tensorFlow.png';
import GenAILogo from '../Assets/genLogo.png';
import { Description, TableChartSharp } from '@mui/icons-material';
import JavaScript from '../Assets/JavaScript-logo.png';
import Sql from '../Assets/Sql.jpg';
import Express from '../Assets/NodeJs.jpg';
import Apis from '../Assets/Apis.png';



type Props = {};

function WorkExperience({}: Props) {

  const experience1 = {
    title: 'Gen AI Intern',
    company: 'Sugarcane AI',
    images: [Sugarcane],
    techStackLogos: [GenAILogo],
    startDate: 'Jan 2024',
    endDate: 'April 2024',
    description: [
      'Designed the prompts for the user to enhance their experience and get better results.',
      'Was tasked to rewrite the existing prompts to achieve the desired result.',
      'Compared to the previous result, I achieved the highest accuracy among all interns with a 92% improvement.',
    ],
  };
  // const experience2 = {
  //   title: 'AI/ML Internship',
  //   company: 'Edunet Foundation',
  //   images: [eduNet],
  //   techStackLogos: [Python,GenAILogo, TensorFlow],
  //   startDate: 'Aug 2023',
  //   endDate: 'Oct 2023',
  //   description: [
  //     'Remote Internship and I was tasked with training a model to conduct a sentiment analysis on reviews using Open source Dataset',
  //     'Trained model got the accuracy of 76%, which was later improved further using Random forest classifier.',
  //   ],
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard {...experience1} />
        {/* <ExperienceCard {...experience2} /> */}
        
      </div>
    </motion.div>
  );
}

export default WorkExperience;
