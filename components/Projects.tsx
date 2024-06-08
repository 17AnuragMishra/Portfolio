import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Inntrack from '../Assets/inntrack2.png';
import PokemonApp from '../Assets/pokemon.png';
import Saor from '../Assets/SAOR.png';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';


type Props = {};

type StaticImageData = {
  src: string;
};
interface Project {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  visit: string;
  github: string;
}

function Projects({}: Props) {
  const projects: Project[] = [
    {
      id: 1,
      imageSrc:{src: Inntrack.src},
      title: 'Inntrack',
      description: 'Inntrack(Under-Development): Aim to provide real-time tracking system for delivery on Map, This enables user to track there courier on map irrespective of the platform such as Flipkart, Amazon, Snapdeal.',
      visit: '#',
      github: 'https://github.com/17AnuragMishra/innTrack-',
    },
    {
      id: 2,
      imageSrc:{src: PokemonApp.src},
      title: 'Pokemon App(Game)',
      description: "This Web Application is based on virtual world and characters bought from cartoon name Pokémon. It provides user to know the ability of their favorite character by entering the name. This uses freecodecamp pokemon-Api to fetch the details to the frontend, for me visit the source code-",
      visit: 'https://17anuragmishra.github.io/Pokemon-Search-App/',
      github: 'https://github.com/17AnuragMishra/Pokemon-Search-App',
    },
    {
      id: 3,
      imageSrc:{src: Saor.src},
      title: 'Sentiment Analysis of Reviews',
      description: 'In this project we have done the sentiment analysis of restaurant reviews with the help Of Machine Learning using an open source dataset of csv file. To run this project just copy past the code from the source on the Google Colab.',
      visit: 'https://colab.research.google.com/drive/155eYiRVZNf_MTnGd_jLEUUn8VDhh0UL8?usp=sharing',
      github: 'https://github.com/17AnuragMishra/Sentiment-Analysis-using-Python-AI-ML',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 content-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project) => (
          <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-44 h-screen object-cover">
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 2}}
              viewport={{ once: true }}
            >
            <Image
              src={project.imageSrc.src}
              alt=""
              width={500} 
              height={300} 
            />
            </motion.div>
            <div className="space-y-2 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center flex justify-center">
                <span className="underline decoration-[#F7AB0A]">Featured Project {project.id} of {projects.length} </span> <span>: </span>
                {project.title} <a className='px-2 text-[#e8fd00]' href={project.github} > <GitHubIcon/> </a> <a className='px-2 text-[#008bfd]' href={project.visit} > <LaunchIcon/> </a>
              </h4>

              <p className="text-lg text-center md:text-left">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
