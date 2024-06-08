import React from 'react';
import { motion } from 'framer-motion';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};


interface ExperienceCardProps {
  title: string;
  company: string;
  images: StaticImageData[];
  techStackLogos: StaticImageData[];
  startDate: string;
  endDate: string;
  description: string[];
}

function ExperienceCard({
  title,
  company,
  images,
  techStackLogos,
  startDate,
  endDate,
  description,
}: ExperienceCardProps) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 40 }}
        viewport={{ once: true }}
        className='w-16 h-16 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
        src={images[0].src} 
        alt={`${company} Logo`} 
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-5 my-2'>
          {techStackLogos.map((logo, index) => (
            <img key={index} className='w-10 h-10 rounded-full object-contain' src={logo.src} alt={`Tech Stack ${index + 1}`} />
          ))}
        </div>
        <p className='uppercase py-2 text-gray-300'>{`${startDate} - ${endDate}`}</p>
        <ul className='list-disc space-y-1 ml-5 text-lg'>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
