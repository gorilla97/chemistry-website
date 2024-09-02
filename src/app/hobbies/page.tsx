import React from 'react';
import Navbar from '../../components/navbar';

const Hobbies = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Hobbies and Interests</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Music</h2>
            <p className="text-lg">
              I have a deep love for music, especially playing the piano. I was classically trained and have recently developed a passion for jazz and improvisation. Music allows me to express creativity and unwind after a busy day. I also played the violin in my school's orchestra, which fostered a strong appreciation for collaborative performance.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Sports</h2>
            <p className="text-lg">
              I'm an avid sports enthusiast, with basketball being my favorite. I'm highly competitive and enjoy playing any sport that challenges me physically and mentally. I believe sports are a great way to build teamwork skills, stay active, and enjoy the thrill of competition.
            </p>
          </div>
          {/* Add other hobbies and interests here */}
        </div>
      </div>
    </>
  );
};

export default Hobbies;