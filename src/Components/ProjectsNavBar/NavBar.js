import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'
import logo from '../../Assests/logo.png'
import contactImg from '../../Assests/contactImg.png'
import menu from '../../Assests/burgerMenu.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={100} className='desktopMenuListItem'>Contact</Link>
        </div>
        {/* burger menu when changed responsively */}
        <button className='desktopMenuBtn' onClick={() => setShowMenu(!showMenu)}>Projects
          <img src={menu} alt='menu' className='mobMenu'/>
        </button>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}} >
            <Link activeClass='active' to='emojiSearch' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Emoji Search</Link>
            <Link activeClass='active' to='simpleCalc' spy={true} smooth={true} offset={-100} duration={100} className='listItem' onClick={() => setShowMenu(false)}>Simple Calculator</Link>
        </div>
      </nav>
  )
}

export default NavBar