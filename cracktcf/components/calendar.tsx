import React, { useEffect, useRef } from 'react';

const Calendar = () => {
  const calendlyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);

        if (calendlyRef.current) {
          calendlyRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget min-w-[320px] h-[700px] bg-orange-200"
      data-url="https://calendly.com/cracktcftest/french-class-free-trial"
    />
  );
};

export default Calendar;
