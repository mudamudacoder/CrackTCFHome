"use client";

import AfterTrial from '@/components/aftertrial';
import Calendar from '@/components/calendar'
import React, { useEffect, useState } from 'react'

const Book = () => {
    
  return (
    <div>
      <div className="text-7xl text-center text-white bg-orange-200 py-20 font-extrabold" style={{
        backgroundImage: 'url(/book.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '700px',
      }}>
      Free Trial Class - Book Now
      <p className="font-extralight py-20 text-orange-600" >Select a date/time slot from below</p>
      </div>
    <Calendar/>
    <AfterTrial/>
    </div>
  )
}

export default Book