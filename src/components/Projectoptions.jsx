import React from 'react'
import Linkto from './Linkto'

const Projectoptions = ({technologies, title, originalsite, sitelink, descp, coverimg, linktitle, originallinktitle}) => {
  return (
     
<div
className="my-6 max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly">
    <a href={sitelink} className='flex items-center justify-center py-3 w-full'>
        <img className="rounded-t-lg w-[50%]" src={coverimg} alt={title} />
    </a>
  
    <div className="p-5 flex flex-col justify-between">
        <a href={sitelink}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descp}</p>
        <div className='flex flex-wrap items-center gap-1.5 my-4'>
            {
                technologies?.map((tech, i)=><div key={i} className='lowercase text-xs rounded-lg p-3 bg-[#FAF9F6] dark:bg-[#364153]'>
                    {tech}
                </div>)
            }
        </div>
        <div className='flex items-center gap-2'>
        <Linkto
            address={sitelink}
            action={'_blank'}
            caption={linktitle}
            styles={'text-xs font-bold'}
           />
        
        {originalsite && 
         <Linkto
         address={originalsite}
         action={'_blank'}
         caption={originallinktitle}
         styles={'text-xs font-bold'}/>
        
        }
        </div>
        
    </div>
</div>


  )
}

export default Projectoptions
