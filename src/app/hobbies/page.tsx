import React from 'react';
import Navbar from '../../components/navbar';

const Hobbies = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Hobbies and Interests</h1>

        {/* Section for Music */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Music</h2>
          <p className="text-lg">
            I have a deep love for music, especially playing the piano. I was classically trained and have recently developed a passion for jazz and improvisation. Music allows me to express creativity and unwind after a busy day. I also played the violin in my school's orchestra, which fostered a strong appreciation for collaborative performance.
          </p>
        </div>

        {/* Section for Sports */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sports</h2>
          <p className="text-lg">
            I'm an avid sports enthusiast, with basketball being my favorite. I'm highly competitive and enjoy playing any sport that challenges me physically and mentally. I believe sports are a great way to build teamwork skills, stay active, and enjoy the thrill of competition.
          </p>
        </div>

        {/* Section for Volunteer Work */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Volunteer Work</h2>
          <p className="text-lg">
            Volunteering has always been an important part of my life. As a Volunteer EMT at UNC Chapel Hill, I have dedicated over 300 hours to providing emergency medical services in various areas, including on-campus assistance. I also served as Vice Chair of the Cary Teen Council, where I led and organized community service events, fundraisers, and leadership activities for over 860 members.
          </p>
        </div>

        {/* Section for School Clubs */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">School Clubs and Leadership</h2>
          <p className="text-lg">
            I’m actively involved in several school clubs, including serving as the Social Chair for TechX at UNC. In this role, I organize events, retreats, and panels that connect members with professionals and peers. My leadership experiences in clubs have allowed me to grow both personally and professionally, helping to shape the direction of these organizations while fostering a sense of community.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hobbies;