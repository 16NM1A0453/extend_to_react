import React from 'react'
import './Home.css'
import profilePhoto from '../../Assests/profileImg.png'

const Home = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Niharika Gunnu</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          Welcome to the page of list of sample projects that were done by me
          <br />
          Click on the burger menu to find more...
        </p>
      </div>
      <img src={profilePhoto} alt="Profile Photo" className="bg" />
    </section>
  );
};

export default Home