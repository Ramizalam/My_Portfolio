import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import services_data from '../assets/services_data'
import arrow_icon from '../assets/arrow_icon.svg'
import mywork_data from '../assets/mywork_data'
const MyWork = () => {
  return (
    <div id='project' className='flex flex-col items-center justify-center gap-6 mt-[80px] mb-[100px] '   >
        <div className='relative' >
            <h1 className='px-[30px] text-3xl font-bold mb-2'>MY PROJECT</h1>
            <img className='absolute z-[-1] bottom-0 right-0 ' src={theme_pattern} alt="" srcset="" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-5'>
            {mywork_data.map((work,index) =>{
                return (
                    <img className=' transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-purple-700 hover:rounded-md' src={work.w_img} alt="" srcset="" />
                )
            })}
        </div>
        <div className='flex items-center justify-center gap-2 mt-5 cursor-pointer border-2 border-white py-4 px-5 rounded-full  font-medium hover:gap-5 hover:duration-100 '>
            <p>Show More</p>
            <img src={arrow_icon} alt="" srcset="" />
        </div>

        </div>
  )
}

export default MyWork