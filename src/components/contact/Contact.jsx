import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_mz9xs68';
    const templateID = 'template_ehlqyj8';
    const userID = 'E72_U5xbVS6wSozpv';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Thanks for sharing the details. We will get back to you soon.!');
        setFormData ({
          name: '',
          email: '',
          mobile: '',
          message: '',
        })
      }, (error) => {
        console.error(error.text);
        alert('Failed to get your details. Please try again later.');
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-2/3 shadow-md rounded px-8 py-6 mt-20 mr-4 ml-10" style={{ backgroundColor: '#b5838d' }}>
        <h1 className="text-3xl font-bold text-center mb-6">Let's Talk</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="mobile">Mobile</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              style={{ backgroundColor: '#03045e' }}
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
