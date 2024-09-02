"use client"; // Keep this directive

import React, { useEffect } from 'react';

const Sphere = () => {
  useEffect(() => {
    const sphere = document.querySelector(".sphere");
    const items = document.querySelectorAll(".sphere-item");
    const radius = 450; // Radius of the sphere
    const totalItems = items.length;
    const degIncrement = 360 / totalItems;
    
    items.forEach((item, index) => {
      const theta = index * degIncrement;
      const radian = (theta * Math.PI) / 180;
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      item.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const rotation = scrollTop * 0.1; // Adjust this for smoother scrolling
      sphere.style.transform = `rotateX(${rotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (page) => {
    const sphere = document.querySelector(".sphere");
    sphere.style.transition = "filter 0.5s ease-in-out";
    sphere.style.filter = "blur(10px)";
    
    setTimeout(() => {
      window.location.href = `/${page}`;
      sphere.style.filter = "blur(0)";
    }, 500);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-circle" onClick={() => navigateTo('')}>H</div>
        <div className="nav-circle" onClick={() => navigateTo('about')}>A</div>
        <div className="nav-circle" onClick={() => navigateTo('internships')}>I</div>
        <div className="nav-circle" onClick={() => navigateTo('research')}>R</div>
        <div className="nav-circle" onClick={() => navigateTo('hobbies')}>H</div>
        <div className="nav-circle" onClick={() => navigateTo('projects')}>P</div>
        <div className="nav-circle" onClick={() => navigateTo('contact')}>C</div>
      </div>
      <div className="sphere-container">
        <div className="sphere">
          <div className="sphere-item">Welcome to My Portfolio</div>
          <div className="sphere-item">About Me</div>
          <div className="sphere-item">Projects</div>
          <div className="sphere-item">Research</div>
          {/* Add more items as needed */}
        </div>
      </div>
    </>
  );
};

export default Sphere;