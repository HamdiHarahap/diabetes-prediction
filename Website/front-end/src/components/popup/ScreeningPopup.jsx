import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const ScreeningPopup = ({ isDiabetes, onClose }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    onClose?.();
    navigate('/');
  };

  const handleScreening = () => {
    onClose?.();
    navigate('/skrining');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8">
        <div
          className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${
            isDiabetes ? 'bg-[#FCE7EB]' : 'bg-[#DCFCE7]'
          }`}
        >
          {isDiabetes ? (
            <img src="/icons/warning.svg" alt="" />
          ) : (
            <img src="/icons/check-green.svg" alt="" />
          )}
        </div>
        <h2 className="text-xl font-bold text-[#1F2937] sm:text-2xl">
          {isDiabetes ? 'Terindikasi Diabetes' : 'Tidak Terindikasi Diabetes'}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">
          {isDiabetes
            ? 'Hasil skrining menunjukkan adanya indikasi risiko diabetes. Konsultasikan hasil ini dengan tenaga kesehatan untuk pemeriksaan lebih lanjut.'
            : 'Hasil skrining tidak menunjukkan indikasi diabetes berdasarkan data yang dimasukkan. Tetap jaga pola hidup sehat dan lakukan pemeriksaan berkala.'}
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <Button onClick={handleHome}>Kembali ke Beranda</Button>
          <Button variant="secondary" onClick={handleScreening}>
            Skrining Ulang
          </Button>
        </div>
        <p className="mt-5 text-xs leading-5 text-[#9CA3AF]">
          Hasil ini merupakan skrining awal dan bukan diagnosis medis.
        </p>
      </div>
    </div>
  );
};

export default ScreeningPopup;
