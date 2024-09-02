import React from 'react';
import Navbar from '../../components/navbar';

const Research = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Research Experience</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Computational Materials Science Intern at Chase Solar Group</h2>
            <p className="text-lg mb-2">Jan 2024 - Present | Chapel Hill, NC</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Innovated methodologies for enhancing thin film properties in photoelectrochemical applications, focusing on diamond thin films to improve surface functionality.</li>
              <li>Bridged the gap between experimental thin film fabrication and computational modeling, contributing to the advancement of thin film research in materials science.</li>
              <li>Collaborated closely with interdisciplinary teams to integrate experimental and computational approaches, driving innovative solutions in materials research.</li>
            </ul>
          </div>
          {/* Repeat similar blocks for other research experiences */}
        </div>
      </div>
    </>
  );
};

export default Research;
