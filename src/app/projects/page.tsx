import React from 'react';
import Navbar from '../../components/navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>

        {/* Section for Website Creation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Personal Portfolio Website</h2>
          <p className="text-lg">
            This website is a culmination of my passion for both design and development. Built using Next.js and Tailwind CSS, it showcases my journey, skills, and projects in a dynamic and engaging way. I wanted to create a site that not only provides a professional overview of my experiences but also reflects my personality and creativity. The process involved integrating animations, ensuring responsiveness, and optimizing the user experience across various devices.
          </p>
        </div>

        {/* Section for Startup: OurGlass */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">OurGlass - Startup</h2>
          <p className="text-lg">
            As the co-founder and Algorithm Lead of OurGlass, I played a pivotal role in developing an app that helps students generate personalized schedules based on their individual preferences. OurGlass is currently used by over 600 students at UNC and nearby schools. My focus was on creating the core scheduling algorithm that forms the backbone of the app. Additionally, I took an active role in marketing and expanding our user base through networking and hands-on engagement at various events.
          </p>
        </div>

        {/* Section for Quiz App */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">QuizApp</h2>
          <p className="text-lg">
            QuizApp is a project born out of my desire to create a fun and educational tool for students. This app allows users to create, share, and take quizzes on various topics. I built QuizApp using a full-stack approach, employing technologies such as Next.js for the frontend, Flask for the backend, and SQL for data management. The app features a user-friendly interface, real-time quiz creation, and analytics to track performance, making it an effective study aid for students of all ages.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;