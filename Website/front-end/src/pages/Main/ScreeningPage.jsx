import { useState } from 'react';
import ScreeningForm from '../../components/forms/Screening';
import Footer from '../../layout/Main/Footer';
import Header from '../../layout/Main/Header';
import ScreeningPopup from '../../components/popup/ScreeningPopup';

const ScreeningPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDiabetes, setIsDiabetes] = useState(false);

  const handleScreeningResult = (diabetes) => {
    setIsDiabetes(diabetes == 'ya' ? true : false);
    setShowPopup(true);
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-5 py-10 sm:px-10 lg:px-20">
        <div className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
          <ScreeningForm onResult={handleScreeningResult} />
        </div>
      </section>

      <Footer />

      {showPopup && (
        <ScreeningPopup
          isDiabetes={isDiabetes}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default ScreeningPage;
