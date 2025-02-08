import React from 'react'
import about_profile from '../assets/about_profile.svg'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_pic from '../assets/profile_pic.jpg'
import new_profile from '../assets/new_profile.jpg'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div id='about' className='about overflow-x-hidden flex justify-center items-center mt-18 gap-[80px] flex-col p-3 '>
        <div className=' about-title relative mt-8'>
            <h1 className='text-4xl font-semibold px-3'>About Me</h1>
            <img className='absolute bottom-0 right-0 z-[-1]' src={theme_pattern} alt="img" srcset="" />
        </div  >
        <div className=' about-section flex gap-[80px] mt-5 px-12'>
            <div className='about-left'>
                <motion.img  
                 initial={{x:-100} }
               whileInView={{x:10} } 
                transition={{ duration: 1 }}
                className='h-21 w-[54rem] bg-cover rounded-xl'     src={new_profile}  alt="" srcset="" />
            </div> 
            <motion.div
            initial={{x:100} }
            whileInView={{x:0} }
            transition={{ duration: 1 }}
            className=' about-right flex flex-col gap-5'>
               <div className=' flex flex-col gap-3 text-2xl font-medium'>
                <p>My journey into web development began with a fascination for how websites come to life. Over the years, I have dedicated myself to mastering front-end technologies and continuously improving my skills.</p>
                <p>My goal is to create web applications that are not only functional but also aesthetically pleasing and easy to use. I thrive on solving complex problems and bringing ideas to life through code.</p>
                 </div>
               <div >
                  <div className='flex flex-col mt-9 '>
                     <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105'><p  className='min-w-[150px] text-[20px]' >HTML & CSS</p> <hr className='w-[90%] border-none h-[8px] rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]  ' /> </div>
                     <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105'><p className='min-w-[150px] text-[20px]'>JavaScript</p> <hr className='w-[60%] border-none h-[8px] rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]  ' /> </div> 
                     <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105'> <p className='min-w-[150px] text-[20px]'>React</p> <hr className='w-[40%] h-[8px] border-none rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] ' /></div>
                     <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105'> <p className='min-w-[150px] text-[20px]'>Java</p> <hr className='w-[50%]  h-[8px] border-none rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] ' /> </div>
                     <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105'><p className='min-w-[150px] text-[20px]'>Tailwind CSS</p> <hr className='w-[70%] h-[8px] border-none rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] ' /></div>
                   
                   </div>
                </div>  
            </motion.div>  
        </div>             
           <div  className=' about-achievements flex gap-[80px] w-full justify-around p-5 '>
              <div className='  about-achievement duration-300 hover:scale-114'>
                <h1 className=' skill   text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-[#DF8908] to-[#B415FF] '>2+</h1>
                <p className='  text-xl font-normal' > Years of experience</p>
              </div>
             <hr  className='w-px h-16 bg-white'/>
              <div className='about-achievement duration-300 hover:scale-114'>
                <h1  className='text-4xl text-transparent bg-clip-text  bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>10+</h1>
                <p className=' text-xl font-normal' > Project Completed</p>
              </div>
              <hr className='w-px h-16 bg-white' />
              <div className='about-achievement duration-300 hover:scale-114'>
                 <h1 className='text-4xl  font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>5+</h1>
                 <p className=' text-xl font-normal' > Hackathon Winner</p>
               </div>
           </div>   
 </div>
  )
}

export default About