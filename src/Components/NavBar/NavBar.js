import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assests/logo.png'
import contactImg from '../../assests/contactImg.png'
import { Link } from 'react-scroll'
import menu from '../../assests/burgerMenu.png'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'>About</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='ContactLogo' className='desktopMenuImg'/>Contact Me
        </button>
        {/* burger menu when changed responsively */}
        <img src={menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}} >
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
  )
}

export default NavBar
