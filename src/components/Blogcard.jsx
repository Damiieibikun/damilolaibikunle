import React from 'react'

const Blogcard = ({title, thumbnail, link, sitename}) => {
  return (
   
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href={link} target='_blank'>
        <img className="p-8 rounded-t-lg" src={thumbnail} alt={title} />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
         
        </a>       
        <div className="flex items-center justify-end my-2.5">
           <a href={link} target='_blank' className='text-xs lowercase hover:text-[#1456ab]'>Site: {sitename}</a>
        </div>
    </div>
</div>
  )
}

export default Blogcard
