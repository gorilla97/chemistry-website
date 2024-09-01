import React from 'react';
import Navbar from '../../components/navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-4">
          I'm always open to connecting with like-minded individuals, whether it's for collaboration, sharing ideas, or just getting to know each other. Here are the best ways to reach me:
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-lg">
            Feel free to send me an email at <a href="mailto:pkosuri@unc.edu" className="text-blue-500 hover:underline">pkosuri@unc.edu</a> for any inquiries or opportunities.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
          <p className="text-lg">
            You can also connect with me on LinkedIn. I regularly update my profile with my latest projects and experiences. Connect with me at: 
            <a href="https://www.linkedin.com/in/pranav-kosuri" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> linkedin.com/in/pranav-kosuri</a>.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Phone</h2>
          <p className="text-lg">
            You can reach me via phone at <a href="tel:+19843492575" className="text-blue-500 hover:underline">(984) 349-2575</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;