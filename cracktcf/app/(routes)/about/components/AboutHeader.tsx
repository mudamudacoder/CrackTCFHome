import React from 'react';
import Image from 'next/image';

const AboutHeader: React.FC = () => {
  return (
    <div className="relative text-center" style={{ minHeight: '700px' }}>
      {/* Background image */}
      
      <Image src={'/aboutHead.jpeg'} alt='Background' width={1200} height={500} className={`w-full h-full object-cover absolute inset-0 z-0 opacity-65`}/>
      
      {/* Text content positioned at the top as in the photo */}
      <div className={`absolute top-0 left-0 right-0 z-10 p-8`}>
        <p className={`max-w-2xl mx-auto mt-8 md:mt-16 lg:mt-24 text-orange-800 text-4xl`} > {/* Adjust margins and color as needed */}
          As the authentic "Crack the TCF Canada" institution, we offer specialized French TCF/TEF courses
          and testing programs designed specifically for English-speaking learners.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
