"use client";

import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Handle success, clear form, show message, etc.
      } else {
        console.error('Failed to send email');
        // Handle errors, show message to user, etc.
      }
    } catch (error) {
      console.error('There was an error sending the email', error);
      // Handle errors, show message to user, etc.
    }
  };
  return (
    <div className="flex justify-center items-center bg-orange-100 h-screen text-lg">
      <div className="w-1/2 p-12">
        <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8">
          Get in touch with us to unlock the secrets of cracking the TCF Canada exam! We're here to answer any questions you may have and guide you through the process with our specialized French TCF/TEF courses.
        </p>
        <form className="space-y-4" onSubmit={onSubmit}>
  <div>
    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
    <input type="text" id="firstName" name="firstName" required
           className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"
           onChange={handleChange} value={formData.firstName} />
  </div>
  <div>
    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
    <input type="text" id="lastName" name="lastName" required
           className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"
           onChange={handleChange} value={formData.lastName} />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" id="email" name="email" required
           className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"
           onChange={handleChange} value={formData.email} />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
    <textarea id="message" name="message" rows={4} required
              className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"
              onChange={handleChange} value={formData.message}></textarea>
  </div>
  <div className="text-right">
    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      Send
    </button>
  </div>
</form>

      </div>
      {/* If there's an additional element or image on the right side, you would add it here */}
    </div>
  );
};

export default ContactUs;