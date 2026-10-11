import Button from '../../ui/Button';
import InputGroup from '../../ui/Input';
import Select from '../../ui/Select';
import { useState } from 'react';
import { predict } from '../../../services/Prediction';
import { getAccessToken } from '../../../utils/token';

const ScreeningForm = (props) => {
  const { onResult } = props;

  const [form, setForm] = useState({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    smoking_history: '',
    bmi: '',
    blood_glucose_level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = getAccessToken();

      const data = await predict(form, token);
      console.log(data);
      alert(data.message || 'Berhasil melakukan skrining');
      onResult(data.data[0].diabetes);
      setForm({
        gender: '',
        age: '',
        hypertension: '',
        heart_disease: '',
        smoking_history: '',
        bmi: '',
        blood_glucose_level: '',
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-[#1F2937]">
            Informasi Kesehatan
          </h2>

          <p className="mt-1 text-sm text-[#6B7280]">
            Lengkapi data berikut untuk melakukan skrining awal diabetes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select
            id="gender"
            name="gender"
            label="Jenis Kelamin"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </Select>
          <InputGroup
            id="age"
            name="age"
            label="Usia (tahun)"
            type="number"
            placeholder="Contoh: 20"
            value={form.age}
            onChange={handleChange}
          />
          <Select
            id="hypertension"
            name="hypertension"
            label="Riwayat Hipertensi"
            value={form.hypertension}
            onChange={handleChange}
          >
            <option value="">Pilih jawaban</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </Select>
          <Select
            id="heart_disease"
            name="heart_disease"
            label="Riwayat Penyakit Jantung"
            value={form.heart_disease}
            onChange={handleChange}
          >
            <option value="">Pilih jawaban</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </Select>
          <div className="md:col-span-2">
            <Select
              id="smoking_history"
              name="smoking_history"
              label="Riwayat Merokok"
              value={form.smoking_history}
              onChange={handleChange}
            >
              <option value="">Pilih riwayat merokok</option>
              <option value="tidak pernah">Tidak pernah</option>
              <option value="tidak ada informasi">Tidak ada informasi</option>
              <option value="saat ini masih">Saat ini masih</option>
              <option value="pernah">Pernah</option>
              <option value="tidak sedang">Tidak sedang</option>
              <option value="mantan">Mantan</option>
            </Select>
          </div>
          <InputGroup
            id="bmi"
            name="bmi"
            label="BMI (Indeks Massa Tubuh)"
            type="text"
            placeholder="Contoh: 22,5"
            value={form.bmi}
            onChange={handleChange}
          />
          <InputGroup
            id="blood_glucose_level"
            name="blood_glucose_level"
            label="Kadar Glukosa Darah (mg/dL)"
            type="number"
            placeholder="Contoh: 100"
            value={form.blood_glucose_level}
            onChange={handleChange}
          />
        </div>
        <div className="p-4 bg-[#FFF8F9] border border-[#F3DDE1] rounded-lg">
          <p className="text-xs leading-5 text-[#6B7280]">
            <span className="font-semibold text-[#B4233C]">Catatan:</span>{' '}
            Masukkan data sesuai kondisi Anda. Jika tidak mengetahui nilai
            tertentu, jangan memperkirakannya secara sembarangan.
          </p>
        </div>

        {/* Submit Button */}
        <Button type="submit">Mulai Skrining</Button>
      </div>
    </form>
  );
};

export default ScreeningForm;
