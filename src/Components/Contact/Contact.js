import React from 'react'
import './Contact.css'
import emailIcon from '../../Assests/emailIcon.png'
import linkedInIcon from '../../Assests/linkedInIcon.png'
import conatctIcon from '../../Assests/contactIcon.png'

const Contact = () => {
  return (
    <section id='contact'>
         <span className='contactTitle'>Contact Me</span>
            <div className='contactModes'>
                <div className='contactMode'>
                    <img src={emailIcon} alt='emailIcon' className='contactImg'/>
                    <div className='contactText'>
                        <h2>Email</h2>
                        <p>niharika.gunnu1999@gmail.com</p>
                    </div>
                </div>
                <div className='contactMode'>
                    <img src={linkedInIcon} alt='linkedInIcon' className='contactImg'/>
                    <div className='contactText'>
                        <h2>LinkedIn</h2>
                        <p>Niharika Gunnu</p>
                    </div>
                </div>
                <div className='contactMode'>
                    <img src={conatctIcon} alt='conatctIcon' className='contactImg'/>
                    <div className='contactText'>
                        <h2>Phone</h2>
                        <p>6305533282</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Contact