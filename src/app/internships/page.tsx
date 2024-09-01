import React from 'react';
import Navbar from '../../components/navbar';

const Internships = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Internships</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">AI Development Intern at Providence Transportation</h2>
          <p className="text-lg mb-2">May 2024 - Aug 2024 | Raleigh, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Led a cross-functional team in developing and deploying APIs to streamline dispatcher, driver, and EMT workflows, reducing redundant data entry and improving operational efficiency.</li>
            <li>Optimized AI algorithms for EMT dispatch, leading to a 20% decrease in response times by improving the accuracy and efficiency of the system.</li>
            <li>Developed an NLP-driven model to streamline narrative writing, reducing EMT documentation time by 20%.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">App Developer and AI Architect at CareYaya</h2>
          <p className="text-lg mb-2">Jan 2024 - Aug 2024 | Raleigh, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Spearheaded the development of an application for early Alzheimer's disease detection, achieving 80% accuracy in AI model training by collaborating with neuroscientists across the nation.</li>
            <li>Integrated complex AI architectures and data processing pipelines to enhance the application's robustness and user accessibility.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Cofounder and Algorithm Lead at OurGlass</h2>
          <p className="text-lg mb-2">May 2023 - Present | Chapel Hill, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Developed and led the creation of a scheduling algorithm for students, now used by over 600 users at UNC and nearby schools.</li>
            <li>Demonstrated marketing and networking abilities, growing the user base through events and direct interactions.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Internships;