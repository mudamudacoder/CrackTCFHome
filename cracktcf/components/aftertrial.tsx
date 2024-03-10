import React from 'react';
import { Button } from './ui/button';

const AfterTrial: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 text-gray-800">
        <h1 className="text-7xl px-10">What happens after the Trial Class?</h1>
        <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-md mb-6">
          Our team will contact you with details of how to enroll into the full program which is offered in three affordable formats:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Option 1: Group Class (Moderate)</h3>
            <p className="text-green-600 mb-4">Achieve CLB 7 in 4-6 months (16-24 weeks)</p>
            <p className="mb-2">Offered in this option are <span className="font-semibold">two</span> classes per week for a total of <span className="font-semibold">4 hours</span> of weekly instructor led study.</p>
            <p className="mb-4">Our team will provide you with carefully crafted exercises, assignments and quizzes for <span className="font-semibold">self-study</span> in addition to the instructor led classes to equip you with the tools to crack the TCF/TEF Canada exam.</p>
            <p className="font-bold">$499 CAD/month</p>
            <a href="https://buy.stripe.com/test_5kA8zZ6zEc69as0dQR"><Button >
            Buy Now!</Button></a>
          </div>
          
          {/* Option 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Option 2: Group Class (Intense)</h3>
            <p className="text-red-600 mb-4">Achieve CLB 7 in 4 months (16 weeks)</p>
            <p className="mb-2">An intense course outline offering <span className="font-semibold">three</span> classes per week for a total of <span className="font-semibold">6 hours</span> of instructor led study.</p>
            <p className="mb-4">This option, when combined with carefully crafted exercises, assignments and quizzes, is designed to provide you with a road map for successfully navigating the TCF/TEF Canada exam.</p>
            <p className="font-bold">$999 CAD/month</p>
            <a href="https://buy.stripe.com/test_5kA4jJ0bgc6957GbIK"><Button >
            Buy Now!</Button></a>
          </div>
          
          {/* Option 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Option 3: 1-on-1</h3>
            <p className="text-blue-600 mb-4">Achieve CLB 7 in 3-4 months (12-16 weeks)</p>
            <p className="mb-2">The Rolls-Royce of learning French at a price that doesn’t break the bank. Achieve rapid success through this intense course outline offering <span className="font-semibold">four</span> classes per week for a total of <span className="font-semibold">8 hours</span> of instructor led study.</p>
            <p className="mb-4">With 1-on-1 time with the instructor and more weekly learning time, this option has proven most successful in getting desired results.</p>
            <p className="font-bold">$1999 CAD/month</p>
            <a href="https://buy.stripe.com/test_dR617xcY20nrdEc8wz"><Button >
            Buy Now!</Button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterTrial;
