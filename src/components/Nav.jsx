import React from 'react'
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import { BsChevronBarUp } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { PiArticleMediumDuotone } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";


import resume from '../assets/DAMILOLA IBIKUNLE.pdf'
const Nav = () => {
const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('current-theme')) || false);
const [isVisible, setIsVisible] = useState(false);
const [isOpen, setIsOpen] = useState(false); 
const [lastScrollY, setLastScrollY] = useState(0); 
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
  localStorage.setItem('current-theme', JSON.stringify(!isDarkMode))
};

 const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
};


useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setIsVisible(true);
    } else {

      setIsVisible(false);
    }

    setLastScrollY(currentScrollY); 
  };


  window.addEventListener("scroll", handleScroll);

  return () => {

    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

useEffect(() => {
  const htmlElement = document.documentElement;
  if (isDarkMode) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
}, [isDarkMode]);


  return (
    <>
    <nav>
      <div className={ `dark:bg-[#10141E] bg-[#faf9f6e3] shadow-md lg:fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <h1 className='text-[18px] font-extrabold tracking-widest'>Damilola Ibikunle</h1>

<ul className='dark:text-white hidden md:flex  text-[18px] items-center gap-8 justify-center px-3 py-5'>
  <li className="relative group">
    <a href="#aboutme">Bio</a>
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </li>
  <li className="relative group">
    <a href="#skills">Skills</a>
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </li>
  <li className="relative group">
    <a href="#projects">Projects</a>
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </li>
  <li className="relative group">
    <a href="#articles">Articles</a>
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </li>
  <li className="relative group">
    <a href="#contact">Contact Me</a>
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </li>
  <li className="relative group flex items-center gap-1.5">
    <div>
    <a href={resume} target='_blank'>Download Resume</a>    
    <span className="absolute bottom-[-10px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] hover:transition-all duration-200"></span>
    </div>
    <LuExternalLink className="text-gray-400 hover:border-[#1456ab]"/>
    
    </li>  
    <li>
    <div>
      {isDarkMode ?         
      <FaSun onClick={toggleTheme} size={45} className='hidden md:block transition-all duration-300 hover:cursor-pointer border-0 rounded-sm p-3 text-white hover:bg-white hover:text-[#10141E]'/>:
      <FaMoon onClick={toggleTheme} size={45} className='hidden md:block transition-all duration-300 hover:cursor-pointer border-0 rounded-sm p-3 hover:bg-[#10141E] hover:text-white'/> }           
      </div>
      </li>       
</ul>
        </div>    
     
      </div>
      
      
      <div onClick={() => setIsOpen(true)}
        className='lg:hidden dark:bg-[#10141E] bg-[#FAF9F6] flex items-center gap-2 opacity-50 hover:opacity-100 fixed z-100 top-5 right-2 hover:cursor-pointer text-[18px] 
        transition-all duration-300 px-6 py-2'>
        <GiHamburgerMenu size={28}/>
      </div>
        
        <button
        className ='flex items-center gap-2 fixed z-100 bottom-5 left-5 hover:cursor-pointer text-[18px] font-light transition-all duration-300 px-6 py-2
         rounded-sm border dark:text-[#FAF9F6] dark:bg-[#10141E] bg-[#FAF9F6] text-[#10141E] hover:text-[#FAF9F6]
        hover:bg-[#10141E] dark:hover:bg-[#FAF9F6] dark:hover:text-[#10141E] dark:border-gray-700 border-gray-200'
        onClick={scrollToTop}>        
          <BsChevronBarUp size={20}/>
        </button>      
        
    </nav>
    
    

    <div className="absolute h-full z-[100]">
      <div className={
        "fixed z-[100] inset-0 transform ease-in-out h-full" +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 translate-x-full")
      }>
        <section
          className={
            "dark:bg-[#10141E] bg-[#FAF9F6] dark:text-white text-[#10141E] w-screen max-w-[16rem] right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <article onClick={() => setIsOpen(false)} className="relative w-screen max-w-[16rem] overflow-y-scroll h-full">
            <header className="p-3 font-AmazonEmber capitalize flex gap-2 items-center justify-end">
               <span className="hover:cursor-pointer hover:text-[#1456ab] hover:transition-all duration-200">X</span>
            </header>
                  
           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
                <a href='#aboutme' className="font-sans text-[15px] flex items-center gap-2">Bio
              <FiUser size={20}/>
              </a>  
            </div>            
            
           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              <a href='#skills' className="font-sans text-[15px] flex items-center gap-2">Skills
              <FaHeadSideVirus size={15}/>
                </a>  
            </div>
           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              <a href='#projects' className="font-sans text-[15px] flex items-center gap-2">Projects
          <GrProjects size={15}/>
                </a>              
            </div>          

           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              <a href='#articles' className="font-sans text-[15px] flex items-center gap-2">Articles
              <PiArticleMediumDuotone size={15}/>
                </a>              
            </div>
           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              <a href='#contact' className="font-sans text-[15px] flex items-center gap-2">Contact me
            <MdContactMail size={15}/>
                </a>              
            </div>
            <div className='p-4 space-y-6 border dark:border-gray-800 border-gray-200
            dark:bg-[#161B29] bg-white'></div>

           <div className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              <a href={resume} target='_blank' className="font-sans text-[15px] flex items-center gap-2">Download Resume
              <LuExternalLink className="text-gray-400 hover:text-[#1456ab]"/>
                </a>              
            </div>         
           <div 
           onClick={toggleTheme} 
           className='p-3 space-y-6 border dark:border-gray-800 border-gray-200
            dark:hover:bg-[#161B29] hover:bg-white transition-all duration-300 
            hover: cursor-pointer hover:border-b-[#1456ab]'>
              { isDarkMode ? 
              <p className="font-sans text-[15px] flex items-center gap-2">Light Theme
                <FaSun size={15}/>
                </p>:
              <p className="font-sans text-[15px] flex items-center gap-2">Dark Theme
                <FaMoon size={15}/>
                </p>

              }
             
            </div>         
                             
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => setIsOpen(false)}
        ></section>
      </div>
    </div>
    </>
    
  )
}

export default Nav
