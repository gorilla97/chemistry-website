import React from 'react';
import Navbar from '../../components/navbar';

const Research = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Research Experience</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Computational Materials Science Intern at Chase Solar Group</h2>
          <p className="text-lg mb-2">Jan 2024 - Present | Chapel Hill, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Innovated methodologies for enhancing thin film properties in photoelectrochemical applications, focusing on diamond thin films to improve surface functionality.</li>
            <li>Bridged the gap between experimental thin film fabrication and computational modeling, contributing to the advancement of thin film research in materials science.</li>
            <li>Collaborated closely with interdisciplinary teams to integrate experimental and computational approaches, driving innovative solutions in materials research.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Research Internship with Kabanov and Tropsha Groups</h2>
          <p className="text-lg mb-2">July 2023 - Jan 2024 | UNC Chapel Hill, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Developed an optimized method for treating lung cancer using hybrid techniques that combine chemical and computational drug modeling, with a focus on polymeric micelles.</li>
            <li>Collaborated between lab groups, bridging chemical and computational disciplines to advance drug delivery research.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Research Internship with Dickey Group</h2>
          <p className="text-lg mb-2">June 2021 - Aug 2022 | NC State University, Raleigh, NC</p>
          <ul className="list-disc pl-5 text-lg">
            <li>Conducted research on gallium-indium liquid metals, leading to the development of a wearable heated blanket for use in hospital settings.</li>
            <li>Applied creative problem-solving and collaborative skills within an interdisciplinary team to drive innovative applications of liquid metals in wearable technology.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Research;