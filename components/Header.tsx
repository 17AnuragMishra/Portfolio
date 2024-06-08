import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }} className="flex flex-row items-center">
        <SocialIcon url="https://www.linkedin.com/in/17AnuragMishra/" fgColor='gray' bgColor='transparent' target='_blank'/>
        <SocialIcon url="https://www.instagram.com/anuragmishra_17/" fgColor='gray' bgColor='transparent' target='_blank'/>
        <SocialIcon url="https://github.com/17AnuragMishra" fgColor='gray' bgColor='transparent' target='_blank'/>
        <SocialIcon url="https://leetcode.com/17AnuragMishra/" fgColor='gray' bgColor='transparent' target='_blank'/>
      </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
          <Link href='#contact'>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
          </Link>
        </motion.div>
    </header>
  )
} 

export default Header