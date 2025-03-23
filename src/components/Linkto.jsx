import React from 'react'

const Linkto = ({styles, address, caption, action, svg, event}) => {
  return (
   <a onClick={event} href={address} target={action} className={`${styles} shadow-md transition-all duration-300 px-6 py-2 rounded-sm border border-gray-200 dark:text-[#FAF9F6] dark:border-gray-700 dark:bg-transparent bg-[#FAF9F6] text-[#10141E] hover:text-[#FAF9F6]
       hover:bg-[#10141E] dark:hover:bg-[#FAF9F6] dark:hover:text-[#10141E]`}>{caption}
       {svg}
       </a>
  )
}

export default Linkto
