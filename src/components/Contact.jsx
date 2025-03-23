import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='contact'
    className='dark:text-white h-screen flex items-center justify-center'
    data-aos="zoom-in"
    data-aos-duration="700">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full'>
        <h1 className='text-center text-5xl lg:text-6xl tracking-widest font-bold flex items-center justify-center'>Get in Touch</h1>
         <div className='h-full flex flex-col  justify-center p-5 text-[18px] bg-[#faf9f67e] shadow-md  rounded-md dark:bg-[#161b29] dark:text-[#FAF9F6]'>
            <div className='border-b-2 border-[#1456ab] grid grid-cols-[_0.4fr_2fr]'>
                <span className='p-5 flex items-center gap-1.5 text-[14px]'> 
                  Email
                  <MdEmail size={28}/>
                </span>
               
                <span className='hover:text-[#1456ab] hover:cursor-pointer bg-white p-5 w-full dark:bg-[#10141E] text-sm tracking-widest'
                onClick={() => window.location = 'mailto:d.m.ibikunle@gmail.com'}
                >d.m.ibikunle@gmail.com</span>
                </div>
            <div className='border-b-2 border-[#1456ab] grid grid-cols-[_0.1fr_3fr]'>

            <span className='p-5 flex items-center gap-1.5 text-[14px]'> 
              LinkedIn
              <FaLinkedin size={23}/>
            </span>
               
               <a href='https://www.linkedin.com/in/damilola-ibikunle-m-sc-aniseng-336971106/?originalSubdomain=ng'
               target='_blank'
                className='bg-white p-5 w-full dark:bg-[#10141E] text-sm tracking-widest hover:text-[#1456ab]'>in/damilola-ibikunle-336971106
               </a>
            </div>
           
         </div>
        </div>
        
      
    </div>
  )
}

export default Contact
