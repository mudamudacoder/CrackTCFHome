import React from 'react';

const CRSSection: React.FC = () => {
  return (
    <div className="relative text-center py-12" style={{
      backgroundImage: `url(/crs.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '700px',
      
    }}>
      <div className="absolute inset-0" style={{ paddingTop: '56.25%' }}></div>
      <div className="relative">
        <h2 className="text-8xl font-thin text-gray-800 mb-8">Boost your CRS Score with French</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Without CLB 7 in French</h3>
            <p className="text-5xl font-bold text-red-600">425</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">With CLB 7 in French</h3>
            <p className="text-5xl font-bold text-green-500">487</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-6">Get an invitation to apply for Canadian Permanent Residency under the French Language Proficiency Category</p>
          <button className="bg-orange-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CRSSection;
