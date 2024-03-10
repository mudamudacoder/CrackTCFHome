import ContactUs from '@/components/contact-us';
import CRSSection from '@/components/crssection';
import SignUpSection from '@/components/sign-up';
import WhatIs from '@/components/what-is';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div style={{
        backgroundImage: 'url(topbg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '700px',
        position: 'relative'  // Add this line
      }}>
        {/* Overlay with reduced opacity */}
        <div style={{ backgroundColor: 'rgba(200, 200, 200, 0.5)', minHeight: '700px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
        
        {/* Content */}
        <div className="mx-auto max-w-4xl p-10" style={{ position: 'relative', zIndex: 2 }}>  {/* Adjusted styles */}
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-5xl text-center px-4">
              <strong>Bonjour!</strong> With our French TCF/TEF courses we've cracked the code to French fluency
            </h1>
            
            <div className="text-center px-4">
              <p>Prepare to embark on a language-learning journey like no other. Our specialized French TCF/TEF courses and testing programs are tailor-made for English-speaking learners who are ready to crack the code of the French language.</p>
            </div>
          </div>
        </div>
      </div>
      <SignUpSection />
      <CRSSection />
      <WhatIs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
