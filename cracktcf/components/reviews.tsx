import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Dennis Bariuan',
    rating: 5,
    comment: 'Because I had many resources, I was disorganized and was jumping from one topic to another, without a plan. It seems there\'s no chance for me to learn French on my own. On my first day of classes with CrackTheTCFCanada, I knew they would help me with my studies. Soukaina is very patient and accommodating and entertains all questions. She guides me when I encounter difficulty with the topics and provides additional resources to reinforce what I learned during the sessions.\n Overall, the team is very supportive and encourages me to study hard to achieve my goals.',
  },
  {
    id: 2,
    name: 'Eda Derili',
    rating: 5,
    comment: 'It has been an immense experience to study with your teacher Soukaina. In 3 months, I completed 3 levels A1, A2 and B1. This month we are going to focus on B2 level. And after completing B2, I plan to try my chance to pass the exam.\n\nThe course is specifically designed for the exam. Thus, it is very efficient for those who want to pass the exam.',
  },
  // Add more reviews as needed
];

const Reviews = () => {
    return (
        <div className='bg-orange-400'>
        <div className="max-w-6xl mx-auto px-4 py-8 ">
          <h2 className="text-5xl font-semibold text-center mb-8">Hear from our Students!</h2>
          <div className="flex overflow-x-scroll no-scrollbar space-x-4 pb-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex-none bg-white shadow-lg rounded-lg p-4" style={{ width: '300px' }}>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-medium">{review.name}</h3>
                  <div className="flex ml-auto">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-sm whitespace-pre-line">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      );
};

export default Reviews;
