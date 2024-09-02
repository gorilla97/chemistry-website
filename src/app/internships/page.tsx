import React from 'react';
import Navbar from '../../components/navbar';

const Internships = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Internships</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">AI Development Intern at Providence Transportation</h2>
            <p className="text-lg mb-2">May 2024 - Aug 2024 | Raleigh, NC</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Led a cross-functional team in developing and deploying APIs to streamline dispatcher, driver, and EMT workflows, reducing redundant data entry and improving operational efficiency.</li>
              <li>Optimized AI algorithms for EMT dispatch, leading to a 20% decrease in response times by improving the accuracy and efficiency of the system.</li>
              <li>Developed an NLP-driven model to streamline narrative writing, reducing EMT documentation time by 20%.</li>
            </ul>
          </div>
          {/* Repeat similar blocks for other internships */}
        </div>
      </div>
    </>
  );
};

export default Internships;