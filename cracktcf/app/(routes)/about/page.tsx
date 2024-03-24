import React from 'react';
import AboutHeader from './components/AboutHeader';

const About: React.FC = () => {
  return (
    <div className="p-8">
      <AboutHeader/>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Who are we?</h2>
        <p>
          Our company is characterized by an unwavering dedication to excellence, making it an iconic symbol of professionalism in the field of French language teaching. Built upon principles of academic excellence and strong pedagogical foundations, our aim is to cultivate competent linguists, equipping both beginners and advanced learners with the skills necessary to excel at the highest level of French language proficiency.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">What do we do?</h2>
        <p>
          For us, our core purpose lies in providing rigorous training for individuals aspiring to attain their TCF (Test de Connaissance du Français) and TEF Canada (Test d'Évaluation de Français) certifications. Our curriculum is dynamic, structured, and refined through years of practice and research-oriented work. It involves an intensive study of the intricacies of the French language. With the guidance of our experienced
           instructors who employ proven academic learning methodologies, we strive to help learners grasp not only French grammar and vocabulary but also gain insights into the culture. Based on this foundation, through in-depth training and meticulous assessments, we equip our students for success in their language journey, preparing them for the linguistic competency required for various achievements, including Canadian Permanent Residency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">What&lsquo;s in it for you?</h2>
        <p>
          In a single phrase - &apos;CLB 7 in French Proficiency&apos;
        </p>
        <p>
          &apos;Crack the TCF Canada&apos; is an investment in your linguistic future. Enrolling in our programs provides you with the opportunity to receive top-notch education while preparing for TCF or TEF Canada exams, all while immersing yourself in language development. Our lessons go beyond typical examination coaching, emphasizing high-quality education, and we steadfastly adhere to the principle of academic excellence via our platform. This opens doors to endless possibilities in Canada, from obtaining landed immigrant status to becoming part of a bilingual workforce. Ultimately, you will embark on an educational journey that empowers you with linguistic abilities and cultural understanding essential for advancing in a French-speaking context.
        </p>
      </section>
    </div>
  );
};

export default About;
