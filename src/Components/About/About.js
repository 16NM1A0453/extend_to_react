import React from 'react'
import './About.css'
import htmlIcon from '../../Assests/htmlIcon.png'
import cssIcon from '../../Assests/cssIcon.png'
import jsIcon from '../../Assests/jsIcon.png'
import reactIcon from '../../Assests/reactIcon.png'

const About = () => {
  return (
    <section id='skills'>
         <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I create and develop web aplications with javascript library called React.</span>
            <div className='skillBars'>
            <div className='skillBar'>
                    <img src={reactIcon} alt='react' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2 className='skillBarHeading'>React</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={jsIcon} alt='javascipt' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2 className='skillBarHeading'>Java Script</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={cssIcon} alt='css' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2 className='skillBarHeading'>CSS</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={htmlIcon} alt='Html' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2 className='skillBarHeading'>HTML</h2>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default About