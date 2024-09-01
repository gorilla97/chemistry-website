import React from 'react';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold">Welcome to My Chemistry-Themed Portfolio</h1>
        <p className="mt-4 text-lg">Explore my projects, learn about me, and get in touch!</p>
      </div>
    </>
  );
};

export default Home;