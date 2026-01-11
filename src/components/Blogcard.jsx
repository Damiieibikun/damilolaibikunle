import React from 'react'

const Blogcard = ({title, thumbnail, link, sitename}) => {
  return (
   
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 group">
    <a href={link} target='_blank' className="block relative overflow-hidden rounded-t-lg">
        <img className="p-8 rounded-t-lg transition-transform duration-500 ease-in-out group-hover:scale-110" src={thumbnail} alt={title} />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
         
        </a>       
        <div className="flex items-center justify-end my-2.5">
           <a href={link} target='_blank' className='text-xs opacity-70 lowercase hover:opacity-100'>Site: {sitename}</a>
        </div>
    </div>
</div>
  )
}

export default Blogcard
