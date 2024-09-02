import React from 'react';
import Navbar from '../../components/navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>Contact Me</h1>
          <p className="text-lg mb-4">
            I'm always open to connecting with like-minded individuals, whether it's for collaboration, sharing ideas, or just getting to know each other. Here are the best ways to reach me:
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-lg">
              Feel free to send me an email at <a href="mailto:pkosuri@unc.edu" className="text-#FF3333 hover:underline">pkosuri@unc.edu</a> for any inquiries or opportunities.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-lg">
              You can also connect with me on LinkedIn. Connect with me at <a href="https://www.linkedin.com/in/pranav-kosuri" target="_blank" rel="noopener noreferrer" className="text-#FF3333 hover:underline">linkedin.com/in/pranav-kosuri</a>.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-lg">
              You can reach me via phone at <a href="tel:+19843492575" className="text-#FF3333 hover:underline">(984) 349-2575</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;