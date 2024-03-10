import React from 'react';

const SignUpSection = () => {
  return (
    <div className="bg-orange-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium sm:text-5xl md:text-6xl">
            Sign up for a <span className="text-red-600">free </span>trial today
          </h2>
        </div>

        <div className="md:flex md:justify-center md:space-x-8 md:items-start">
          <div className="mb-10 md:mb-0">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Trial Class</h3>
              <p className="text-6xl font-extrabold text-red-600">$0</p>
            </div>
            <p className="text-center text-gray-600">
              Experience the charm of French language and culture with our trial class. No commitment, just a taste of what's in store. Enrol today!
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">CLB 7 - 16 Week (4 months) Program</h3>
              <p className="text-6xl font-thin">starting at <span className="text-red-600 font-extrabold">$499/month</span></p>
            </div>
            <p className="text-center text-gray-600">
              Let the experts teach you the code to crack the TCF/TEF Canada French Language test in 16 weeks. No prior French knowledge required.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-red-600 text-white font-bold py-2 px-8 rounded-full hover:bg-red-700">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
