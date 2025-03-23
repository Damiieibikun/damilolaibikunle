import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-[#161B29] dark:text-[#FAF9F6] bg-[#faf9f67e] shadow-md mt-5'>      
      <div className='w-[80%] mx-auto flex items-center gap-3 tracking-widest justify-center p-6'>
       
      {'\u00A9'} 
      <p>Ibikunle Damilola</p>
      {
        new Date().getFullYear()
      }
      </div>
    </div>
  )
}

export default Footer
