import React from 'react';
import Navbar from '../../components/navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          I’m driven by an unyielding intellectual curiosity and a passion for learning. My journey is defined by a deep desire to understand the world around me and to apply logic and reasoning to uncover more about it. Whether through my studies in Polymer Chemistry and Computer Science or my experiences in music and sports, I strive to explore, learn, and grow every day.
        </p>
        <p className="text-lg">
          I’m always eager to connect with others who share a love for discovery and innovation. Feel free to reach out to me on <a href="https://www.linkedin.com/in/pranav-kosuri" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>.
        </p>
      </div>
    </>
  );
};

export default About;