import React from 'react';
import PageTitle from '../../components/PageTitle';
// import PersonalPicture from '../../components/PersonalPicture';
import './index.css';

function About() {
  return (
    <>
      <main className="about-content">
        <section className="title-circle">
          <PageTitle title="About Me" />
        </section>
        <section className="description">
          <p>
            Hello! I am Tainá, a brazilian Web Software Developer.
            My journey with programming has began throught electronics, when I used to write programs to microcontrollers using Assembly and C programming languages.
          </p>
          <p>
            Now days, I build web applications using React.js to the front-end and Node.js to the back-end.
            I am currently studying at Trybe and improving myself to develop applications that will be useful to other people.
          </p>
          <p>
            Feel free to see the projects I have done and contact me. Have a nice time!
          </p>
        </section>
        {/* <PersonalPicture /> */ }
      </main>
    </>
  );
}

export default About;
