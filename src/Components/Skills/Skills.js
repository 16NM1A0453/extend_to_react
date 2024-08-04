import React from 'react'
import './Skills.css'
import htmlIcon from '../../assests/htmlIcon.png'
import cssIcon from '../../assests/cssIcon.png'
import jsIcon from '../../assests/jsIcon.png'
import reactIcon from '../../assests/reactIcon.png'

function Skills() {
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

export default Skills
