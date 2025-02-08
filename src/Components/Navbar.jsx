import React, { useRef, useState } from 'react'
import my_new_logo from '../assets/my_new_logo.svg'
import nav_underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right='0'
    }
    const closeMenu = () => {
        menuRef.current.style.right='-350px'
    }
  return (
    <div id='home' className=' navbar flex justify-between items-center px-14 py-1 '>
        <img className='   w-auto h-[7rem] object-cover ' src={my_new_logo} alt="logo "  />
        <img onClick={openMenu} className=' nav-mob-open h-[2rem] w-auto cursor-pointer' src={menu_open} alt="" srcset="" />
        <ul ref={menuRef} className=' nav-menu flex  text-xl items-center ml-14 space-x-5'>
          <img onClick={closeMenu} className=' nav-mob-close' src={menu_close} alt="" srcset="" />     
            <li><AnchorLink  className='anchorlink ' href='#home'  ><p  onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<img src={nav_underline} alt="" srcset="" /> : <></> }</li>
            <li><AnchorLink className='anchorlink ' offset={50} href='#about'  ><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==='about'?<img src={nav_underline} alt="" srcset="" />: <></>  }</li>
            <li><AnchorLink className='anchorlink ' offset={0} href='#project'  ><p onClick={()=>setMenu("project")}>Project</p></AnchorLink>{menu==='project'?<img src={nav_underline} alt="" srcset="" /> : <></> }</li>
            <li><AnchorLink className='anchorlink ' offset={0} href='#contact'  ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img src={nav_underline} alt="" srcset="" /> : <></> }</li>
        </ul>
        <div className='nav-connect'>
        <AnchorLink className='anchorlink  ' offset={0} href='#contact'  > <button  className='py-[15px] px-[30px] rounded-full bg-gradient-to-r from-[#D47C25] to-[#B923E1] text-xl outline-none cursor-pointer transition-transform duration-300 hover:scale-105 '> Connect with me </button> </AnchorLink>
        </div>
    </div>
  )
}

export default Navbar