import React from 'react'
import js from '../assets/logos/javascript-svgrepo-com.svg'
import tailwind from '../assets/logos/tailwind-svgrepo-com.svg'
import reactframework from '../assets/logos/react-javascript-js-framework-facebook-svgrepo-com.svg'
import vite from '../assets/logos/vite-svgrepo-com.svg'
import next from '../assets/logos/next-js-svgrepo-com.svg'
import node from '../assets/logos/node-js-svgrepo-com.svg'
import mongo from '../assets/logos/mongo-svgrepo-com.svg'
import python from '../assets/logos/python-svgrepo-com.svg'
import sql from '../assets/logos/mysql-logo-svgrepo-com.svg'
import postgres from '../assets/logos/postgresql-logo-svgrepo-com.svg'


const Skills = () => {
    const list_skills = [
        {name: 'Javascript',
            value:js,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {name: 'Tailwind',
            value: tailwind,
        link: 'https://tailwindcss.com/'},
        {name: 'React',
            value: reactframework,
        link: 'https://react.dev/'},
        {name: 'React Vite',
            value: vite,
        link: 'https://vite.dev/guide/'},
        {name: 'Next JS',
            value: next,
        link: 'https://nextjs.org/'}, 
        {name: 'Node JS', value: node, link: 'https://nodejs.org/en'}, 
        {name: 'Mongo DB', value: mongo, link: 'https://www.mongodb.com/products/platform/atlas-database'},
        {name: 'Python', value: python, link: 'https://www.python.org/'},
        {name:'SQL', value: sql, link: 'https://www.mysql.com/'},
        {name: 'PostgreSQL', value: postgres, link: 'https://www.postgresql.org/'}
    ]

  return (
    <div id='skills'
    data-aos="zoom-in"
    data-aos-duration="700" 
    className='min-h-screen dark:text-white flex flex-col justify-center items-center'>
        <h1 className='text-center text-5xl lg:text-6xl tracking-widest font-bold'>Skills</h1>
        <div className='p-10 dark:text-[#FAF9F6] w-full mt-10'>
        {/* <div className='bg-[rgb(250,249,246)] dark:bg-[#161b29] p-10 dark:text-[#FAF9F6] w-full mt-10'> */}
           <div className='w-[80%] mx-auto flex flex-wrap justify-center gap-5'>
           {/* <div className='w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-items-center'> */}
           {
                list_skills?.map(({name, value, link}, idx) => {                                     
                    return(
                <div key={idx} className='flex flex-col gap-2.5 items-center justify-center mt-1.5'>
                <a href={link} target='_blank'>
                <img src={value} alt={name} className='w-[70px] hover:scale-110 transition-all duration-200 hover:cursor-pointer' />
                </a>
               
            <p className='font-extralight'>{name}</p>
            </div>
                    )
                  })             
                
            }
           </div>
           
        
            </div>
      
    </div>
  )
}

export default Skills
