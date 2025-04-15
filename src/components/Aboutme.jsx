import React from 'react'
import Linkto from './Linkto'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import resume from '../assets/DAMILOLA IBIKUNLE.pdf'

const Aboutme = () => {
  return (
    <div 
    id='aboutme'
    data-aos="fade-down" 
    data-aos-duration="700" 
    className='mt-10 min-h-screen w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7'>
      <div className='flex items-center justify-center '>        
        <h1 className='text-5xl lg:text-6xl font-bold tracking-widest'>About Me</h1>
      </div>
      <div className='flex flex-col items-center justify-center p-5 text-[18px] font-light bg-[#faf9f67e] shadow-md rounded-md dark:bg-[#161b29] dark:text-[#FAF9F6]'>
      <p>I am a junior full-stack web developer and a senior research analyst with experience in data analytics.</p>
<br />
<p>I build dynamic, user-friendly, and scalable web applications using modern technologies like React, Node.js, Express, and MongoDB.</p>
<br />    
<p>In the past, I have worked in scientific research for almost six years, where I honed my analytical skills, problem-solving abilities, and attention to detail. Additionally, I spent four years as a customer care representative, which strengthened my communication skills, adaptability, and ability to understand user needs. This experience enables me to build applications with a strong focus on user experience, accessibility, and customer-centric solutions.</p>
<br />
<p>My passions include reading, self-development, mental health awareness, and movies.</p>

      <Linkto
      address={resume}
      styles={'self-end flex items-center gap-3 mt-5 text-[15px] lg:text-[18px] font-light'}
      caption={'Download Resume'}
      action={'_blank'}
      svg={<LiaExternalLinkAltSolid size={25}/>}
      />
      </div>
    </div>
  )
}

export default Aboutme
