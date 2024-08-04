import React from 'react'
import './Home.css'
import profilePhoto from '../../assests/profileImg.png'
import { Link } from 'react-scroll';
import hireMe from '../../assests/hireMe.png'

function Home() {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>Niharika Gunnu</span><br />Web Developer</span>
        <p className='introPara'>I am skilled in building responsive web pages with React through reusable components</p>
      </div>
      <img src={profilePhoto} alt='Profile Photo' className='bg' />
    </section>
  )
}

export default Home
