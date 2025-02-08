import React from 'react'
import profile_img from '../assets/profile_img.svg'
import mydp from '../assets/mydp.png'
import Typewriter from '../assets/Typewriter'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import Blob from './Blob'

const Hero = () => {
  return (
    <div className='relative flex justify-center items-center h-screen overflow-x-hidden '>
      <Blob />
    
 <div className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full '>
    <div className=' hero flex-col items-center   justify-center text-center  p-8 z-10 '>
        <motion.img 
        animate={{rotateY:360}}
           transition={{ duration: 2 }}
        className='mx-auto my-0  w-[380px] bg-cover' src={mydp} alt=" profie pic" srcset=""  />
        
            <h1 className='text-4xl text-center  font-bold mb-5 '>Hi ,I'm <span className=' text-transparent bg-clip-text  bg-gradient-to-r from-[#DF8908] to-[#B415FF]' > <Typewriter text="Ramiz Alam" delay={100}/> </span>, Fullstack Developer based in India</h1>
            <p className='text-center text-xl leading-3'>i'm passionate about the tech and the opportiunity it gives us </p>
            <div className='hero-action flex justify-center space-x-5 mt-7  font-medium '>
            <button className='py-3 px-5  rounded-full  bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer hover:border-2 border-white '>Get in touch</button>
            <button className='py-3 px-5 rounded-full border-2 border-white hover:border-2 hover:border-purple-700 '>Download CV</button>
            </div>
    </div>
 </div>
    </div>
 
  )
}

export default Hero