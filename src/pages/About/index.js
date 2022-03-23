import React from 'react';
import Footer from '../../components/Footer';
import PersonalPicture from '../../components/PersonalPicture';
import './index.css';

function About() {
  return (
    <>
      <main className="about-content">
        <section className="description">
          <h1>About Me</h1>
          <p>
            Hello! I am Tainá, a brazilian Web Software Developer.
            My journey with programming has began throught electronics, when I used to write programs to microcontrollers using Assembly and C programming languages.
            Now days, I build web applications using React.js to the front-end and Node.js to the back-end.
            I am currently studying at Trybe and improving myself to develop applications that will be useful to other people.
            Feel free to see the projects I've done and contact me. Have a nice time!
          </p>
        </section>
        <PersonalPicture />
      </main>
      <Footer />
    </>
  );
}

export default About;
