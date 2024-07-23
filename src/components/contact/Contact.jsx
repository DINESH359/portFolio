import React from 'react';

import './Contact.css'

import ResumeDownload from'./ResumeDownload';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    {/* Contact Form */}
    <div className="max-w-lg w-2/3 shadow-md rounded px-8 py-6 mt-10 mr-4 ml-10" style={{ backgroundColor: '#b5838d' }}>
      <h1 className="text-3xl font-bold text-center mb-6">Let's Talk</h1>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="mobile">
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="tel"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button style={{backgroundColor:'#03045e'}}
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
