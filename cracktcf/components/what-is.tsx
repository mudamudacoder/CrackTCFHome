import React from 'react';

const WhatIs = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-12 bg-red-500 text-white">
        <h2 className="text-6xl font-bold mb-6">
          What is the <br /> TCF/TEF <br /> Canada?
        </h2>
        <p className="text-lg mb-4">
          The TCF Canada and TEF Canada are French Language Proficiency tests accredited by Immigration, Refugees and Citizenship Canada (IRCC).
        </p>
        <p className="text-lg mb-4">
          The four categories across which the abilities are assessed are:
        </p>
        <ul className="text-lg list-disc list-inside mb-4">
          <li>Oral Comprehension (Listening)</li>
          <li>Written Comprehension (Reading)</li>
          <li>Oral Expression (Speaking)</li>
          <li>Written Expression (Writing)</li>
        </ul>
        <p className="text-lg mb-4">
          More information can be found at:
        </p>
        <p className="text-lg  underline mb-4">
          TCF Canada
        </p>
        <p className="text-lg underline">
          TEF Canada
        </p>
        <button className="mt-6 bg-white text-red-500 font-bold py-2 px-4 rounded-full hover:bg-red-700">
          Find out about French Language Proficiency requirements for IRCC
        </button>
      </div>
      <div className="w-1/2">
        <img src="write.png" alt="TCF/TEF Test" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default WhatIs;
