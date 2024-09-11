import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '@/components/WorkExperience';
const inter = Inter({ subsets: ['latin'] });
import About from '../components/About';
import Projects from '@/components/Projects';
// import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0'>
      <Head>
        <title> Anurag Mishra </title>
      </Head>
      <Header />
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-6 w-6 rounded-full filter grayscale hover:grayscale-0' src="https://i.ibb.co/MpBTjcN/goku.jpg" alt="img" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
