import React, { useState } from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'
import {motion,easeIn} from 'framer-motion'
import { div } from 'framer-motion/client'
import Blob from './Blob'

const Contact = () => {

   const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "722ed363-663e-4ab7-8545-91146cf5cc59");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          setEmail("");
            setName("");
            setMessage("");
        }
      };
  return (
    <div className='relative '>
      <Blob />
     <div className='absolute top-0 left-0 z-10'>
     <div id='contact' className='flex flex-col items-center justify-center gap-6 mb-5 mx-11 relative'   >
        <div className=' contact-title relative ' >
            <h1 className=' text-4xl '  >Get in touch</h1>
            <img className=' absolute bottom-0  right-0 z-[-1] ' src={theme_pattern} alt="" srcset="" />
        </div>
        <div className=' contact-section flex gap-7 mt-5 '>
            <motion.div
            initial={{x:-100} }
            whileInView={{x:0} }
            transition={{ duration: 1 }}
            
            className=' contact-left flex flex-col gap-6 '>
                <h1 className='    text-5xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#DF8908] to-[#B415FF] '>Let's Talk </h1>
                <p className='max-w-[550px] text-xl leading-6'>I'm  currently available to take on new project , so feel free to send me a message about anything that you want me to work on. You can contact me anytime </p>
                 <div
                  
                 className=' contact-details flex flex-col gap-8'>
                   <div className='contact-detail'>
                    <img src={mail_icon} alt="" srcset="" /><p>ramizalam64@gmail.com</p>
                   </div>
                   <div className='contact-detail'>
                    <img src={call_icon} alt="" srcset="" /><p>+91 8826397930</p>
                   </div>
                   <div className='contact-detail'>
                    <img src={location_icon} alt="" srcset="" /> <p> Delhi,India</p>
                   </div>
                 </div>
            </motion.div>

             <motion.form 
              initial={{x:100} }
              whileInView={{x:0} }
              transition={{ duration: 1 }}
             onSubmit={onSubmit}  className=' contact-right flex flex-col gap-6 items-start'>
                    <label htmlFor="">Your Name</label>
                    <input required onChange={(e)=>{
                        setName(e.target.value)
                    }}   value = {name} type="text" placeholder='Name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input required onChange={(e)=>{
                        setEmail(e.target.value)
                    }}  value = {email} type="email" placeholder='Email' name='email'/>
                    <label htmlFor="">Your Message</label>
                    <textarea required onChange={(e)=>{
                        setMessage(e.target.value)
                    }}  value ={ message} className='w-[650px] border-none outline-none font-outfit p-3 rounded-lg bg-[#32323c] text-[#A0A0A0] text-xl ' name=" message" rows="8" placeholder=' Enter your Message'></textarea>
                    <motion.button 
                      whileHover={{scale:1.2} }
                    whileTap={{scale:0.9}}  className='py-3 px-10  rounded-full  bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer  text-xl hover:scale-105 hover:duration-200' type='submit'> Submit</motion.button>

          </motion.form>
        </div>
    </div>
     </div>
    </div>
  )
}

export default Contact