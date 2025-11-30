import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div 
      id='contact'
      className='dark:text-white min-h-screen flex items-center justify-center py-20 px-4'
      data-aos="zoom-in"
      data-aos-duration="700"
    >
      <div className='w-full max-w-6xl mx-auto'>
        <h1 className='text-center text-5xl lg:text-6xl tracking-widest font-bold mb-16'>
          Get in Touch
        </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {/* Email Card */}
          <a 
            href='mailto:d.m.ibikunle@gmail.com'
            className='group relative bg-[#faf9f67e] dark:bg-[#161b29] shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent dark:hover:border-white hover:border-[#1456ab] focus:outline-none focus:ring-2 focus:ring-[#1456ab] focus:ring-offset-2 dark:focus:ring-offset-gray-800'
            aria-label="Send email to d.m.ibikunle@gmail.com"
          >
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='bg-[#1456ab] dark:bg-[#1456ab] p-4 rounded-full group-hover:scale-110 transition-transform duration-300'>
                <MdEmail size={32} className='text-white' aria-hidden="true"/>
              </div>
              <h3 className='text-2xl font-bold text-[#10141E] dark:text-[#FAF9F6]'>Email</h3>
              <p className='text-[#10141E] dark:text-[#dedede] text-sm md:text-base break-all dark:group-hover:text-white group-hover:text-[#1456ab] transition-colors duration-300'>
                d.m.ibikunle@gmail.com
              </p>
              <span className='text-xs dark:text-[#dedede] text-[#1456ab] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Click to send email →
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href='https://www.linkedin.com/in/damilola-ibikunle-m-sc-aniseng-336971106/?originalSubdomain=ng'
            target='_blank'
            rel="noopener noreferrer"
            className='group relative bg-[#faf9f67e] dark:bg-[#161b29] shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent dark:hover:border-white hover:border-[#1456ab] focus:outline-none focus:ring-2 focus:ring-[#1456ab] focus:ring-offset-2 dark:focus:ring-offset-gray-800'
            aria-label="Visit Damilola Ibikunle's LinkedIn profile"
          >
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='bg-[#1456ab] dark:bg-[#1456ab] p-4 rounded-full group-hover:scale-110 transition-transform duration-300'>
                <FaLinkedin size={32} className='text-white' aria-hidden="true"/>
              </div>
              <h3 className='text-2xl font-bold text-[#10141E] dark:text-[#FAF9F6]'>LinkedIn</h3>
              <p className='text-[#10141E] dark:text-[#dedede] text-sm md:text-base break-all dark:group-hover:text-white group-hover:text-[#1456ab] transition-colors duration-300'>
                in/damilola-ibikunle-336971106
              </p>
              <span className='text-xs text-[#1456ab] dark:text-[#dedede] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Visit profile →
              </span>
            </div>
          </a>
        </div>       
      </div>
    </div>
  )
}

export default Contact
