import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-orange-100 h-screen">
      <div className="w-1/2 p-12">
        <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <p className="mb-8">
          Get in touch with us to unlock the secrets of cracking the TCF Canada exam! We're here to answer any questions you may have and guide you through the process with our specialized French TCF/TEF courses.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" required className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" required className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 p-2 border-2 border-gray-300 block w-full shadow-sm sm:text-sm rounded-md"></textarea>
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
