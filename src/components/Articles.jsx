import React from 'react'
import Blogcard from './Blogcard'
import blogs from './articleInfo'

const Articles = () => {
  return (
    <div id='articles'
    className='dark:text-white min-h-screen flex flex-col items-center justify-center'
    data-aos="zoom-in"
    data-aos-duration="700" >  
        <h1 className='text-center text-5xl lg:text-6xl tracking-widest font-bold'>Articles</h1>
    <div  className='my-5 py-5 px-10 bg-[#faf9f67e] shadow-md  dark:bg-[#161b29] dark:text-[#FAF9F6] gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {blogs?.map(({sitename, title, thumbnail, link}, index)=>
        <Blogcard
        key={index}
        title={title}
        thumbnail={thumbnail}
        link={link}
        sitename={sitename}
        />)}
    </div>    


    </div>
  )
}

export default Articles
