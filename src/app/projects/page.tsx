import React from 'react';
import Navbar from '../../components/navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Projects</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Personal Portfolio Website</h2>
            <p className="text-lg">
              This website is a culmination of my passion for both design and development. Built using Next.js and Tailwind CSS, it showcases my journey, skills, and projects in a dynamic and engaging way.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">OurGlass - Startup</h2>
            <p className="text-lg">
              As the co-founder and Algorithm Lead of OurGlass, I played a pivotal role in developing an app that helps students generate personalized schedules based on their individual preferences. OurGlass is currently used by over 600 students at UNC and nearby schools.
            </p>
          </div>
          {/* Add other projects here */}
        </div>
      </div>
    </>
  );
};

export default Projects;