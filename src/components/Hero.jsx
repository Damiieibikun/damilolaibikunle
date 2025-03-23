import React from 'react';
import profilepic from '../assets/profilepic.png';
import Linkto from './Linkto';
import { MdExpandMore } from "react-icons/md";

const Hero = () => {
  return (
    <div data-aos="fade-down"
    className='mx-auto bg-transparent dark:text-[#FAF9F6] h-screen grid grid-cols-1 lg:grid-cols-2 pt-2'>
     <div className='flex justify-center items-center'>
        <div className='text-center flex flex-col justify-center gap-10 h-full p-4'>
          <img src={profilepic} alt="profilepic" className='h-48 w-48 rounded-full self-center lg:hidden'/>
        <h1 className='text-6xl lg:text-7xl uppercase font-extrabold tracking-widest'>Damilola Ibikunle</h1>
        <h1 className='text-2xl lg:text-3xl capitalize font-thin'>Full-Stack Engineer</h1>
        <div className='flex items-center justify-center gap-10'>
        <Linkto
      address={'#aboutme'}
      styles={'self-center flex items-center gap-3 text-[15px] lg:text-[18px] font-light'}
      caption={'About Me'}
      svg={<MdExpandMore  size={25}/>}
      />       
        <Linkto
      address={'#projects'}
      styles={'self-center flex items-center gap-3 text-[15px] lg:text-[18px] font-light'}
      caption={'View Projects'}
      svg={<MdExpandMore  size={25}/>}
      /> 
        </div>
       
    </div>     
        
    </div>
    <div className='hidden lg:flex justify-center'>
        <img src={profilepic} alt="profilepic" className='h-[85%]'/>
    </div>
    </div>
  )
}

export default Hero
