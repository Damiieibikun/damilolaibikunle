import React from 'react';
import profilepic from '../assets/profile.png';
import Linkto from './Linkto';
import { MdExpandMore } from "react-icons/md";
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  return (
    <div data-aos="fade-down"
    className='mx-auto bg-transparent dark:text-[#FAF9F6] h-screen grid grid-cols-1 lg:grid-cols-2 pt-2'>
     <div className='flex justify-center items-center'>
        <div className='text-center flex flex-col justify-center h-full p-4'>
          <img src={profilepic} alt="profilepic" className='h-48 w-48 rounded-full self-center lg:hidden'/>
        <h1 className='mb-12 text-6xl lg:text-7xl uppercase font-extrabold tracking-widest'>Damilola Ibikunle</h1>
        <h1 className='text-2xl lg:text-3xl capitalize font-thin'>Junior Full-Stack Developer</h1>
        <h1 className='text-2xl lg:text-3xl capitalize font-thin'>&</h1>
        <h1 className='text-2xl lg:text-3xl capitalize font-thin'>Data Analyst</h1>
        <div className='flex items-center justify-center gap-6 py-3'>
        {/*       
        <Linkto
      address={'#projects'}
      styles={'self-center flex items-center gap-3 text-[15px] lg:text-[18px] font-light'}
      caption={'View Projects'}
      svg={<MdExpandMore  size={25}/>}
      />  */}
      <ScrollIndicator targetId="aboutme" sectionId="hero" />
        </div>
       
    </div>     
        
    </div>
    <div className='hidden lg:flex justify-center'>
        <img src={profilepic} alt="profilepic" className='h-[70%] w-[90%] object-contain'/>
    </div>
    
    </div>
  )
}

export default Hero
