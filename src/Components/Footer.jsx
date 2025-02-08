import { hr } from 'framer-motion/client'
import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='px-11 py-5 mt-11 '>
  <hr className=' h-px bg-white'/>
    <div className='footer flex justify-between items-center p-5'>
        <div>
         <h1 className='text-3xl'>Ramiz Alam</h1>
        </div>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-2xl font-poppins' >My Socials</h2>
            <div className=' w-full flex gap-2'>
                <a className=' ' href="https://www.linkedin.com/in/ramiz-alam-037806201/"><img  className=' w-7 h-7 hover:scale-150 hover:duration-200   '  src={linkedin} alt="" srcset="" /></a>
                <a href="https://x.com/ramizal29448573"><img className=' w-7 h-7 hover:scale-150 hover:duration-200 ' src={twitter} alt="" srcset="" /></a>
                <a href="https://www.instagram.com/ramizalam28/"><img className=" w-7 h-7 hover:scale-150 hover:duration-200 "   src={instagram} alt="" srcset="" /></a>
                <a href="https://github.com/Ramizalam"><img className=' w-7 h-7  hover:scale-150 hover:duration-200  ' src={github} alt=" " srcset="" /></a>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer