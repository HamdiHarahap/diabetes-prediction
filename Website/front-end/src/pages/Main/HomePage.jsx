import Button from '../../components/ui/Button';
import Footer from '../../layout/Main/Footer';
import Header from '../../layout/Main/Header';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const HomePage = () => {
  useDocumentTitle('Beranda | Diabeta');

  return (
    <>
      <Header />

      <main>
        <section id="hero" className="bg-[#FFF8F9]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex items-center justify-between gap-12">
              <div className="w-1/2">
                <span className="inline-block px-4 py-2 mb-5 text-xs font-semibold text-[#B4233C] bg-[#FCE7EB] rounded-full">
                  Kenali Risiko Diabetes Sejak Dini
                </span>
                <h1 className="text-5xl font-bold leading-tight text-[#1F2937]">
                  Kenali Risiko Diabetes,
                  <span className="text-[#B4233C]">Mulai Peduli Hari Ini.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#6B7280]">
                  Diabeta membantu Anda melakukan skrining awal risiko diabetes
                  berdasarkan beberapa faktor kesehatan. Cepat, sederhana, dan
                  dapat dilakukan secara online.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <Button url="/skrining">Mulai Skrining</Button>
                  <Button url="#about" variant="secondary">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>

              <div className="w-1/2 flex justify-center">
                <div className="relative w-105 h-90 bg-white rounded-2xl shadow-sm border border-[#F3DDE1] flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#FFF1F3] flex items-center justify-center">
                    <span className="text-[#B4233C] text-6xl">+</span>
                  </div>
                  <div className="absolute top-8 right-6 px-4 py-3 bg-white rounded-xl shadow-md border border-[#F3DDE1]">
                    <p className="text-xs text-[#6B7280]">Risk Assessment</p>
                    <p className="mt-1 text-sm font-bold text-[#B4233C]">
                      Screening
                    </p>
                  </div>
                  <div className="absolute bottom-8 left-6 px-4 py-3 bg-white rounded-xl shadow-md border border-[#F3DDE1]">
                    <p className="text-xs text-[#6B7280]">Simple & Fast</p>
                    <p className="mt-1 text-sm font-bold text-[#1F2937]">
                      Online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-[#FFF8F9] rounded-xl">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/clock.svg" alt="" />
                </div>
                <h3 className="font-semibold text-[#1F2937]">Cepat</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Proses skrining dapat dilakukan dalam beberapa menit.
                </p>
              </div>
              <div className="p-6 bg-[#FFF8F9] rounded-xl">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/browser.svg" alt="" />
                </div>
                <h3 className="font-semibold text-[#1F2937]">Online</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Dapat diakses kapan saja melalui perangkat Anda.
                </p>
              </div>
              <div className="p-6 bg-[#FFF8F9] rounded-xl">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/shield.svg" alt="" />
                </div>
                <h3 className="font-semibold text-[#1F2937]">Sederhana</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Tidak membutuhkan proses yang rumit untuk memulai.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex items-center gap-16">
              <div className="w-1/2">
                <div className="h-85 bg-[#FFF1F3] rounded-2xl flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-sm p-4">
                    <img src="/icons/scan.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <span className="text-sm font-semibold text-[#B4233C]">
                  Tentang Diabeta
                </span>
                <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                  Memahami risiko adalah langkah pertama
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#6B7280]">
                  Diabetes dapat berkembang secara bertahap dan terkadang tidak
                  menunjukkan gejala yang jelas pada tahap awal. Karena itu,
                  mengenali faktor risiko dapat menjadi langkah awal untuk
                  meningkatkan kesadaran terhadap kesehatan.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                  Diabeta menyediakan skrining awal berbasis machine learning
                  untuk memberikan gambaran mengenai tingkat risiko berdasarkan
                  data yang Anda masukkan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold text-[#B4233C]">
                Fitur Diabeta
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                Semua yang Anda butuhkan untuk memulai
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#6B7280]">
                Dirancang agar proses mengenali risiko diabetes menjadi lebih
                sederhana dan mudah dipahami.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="p-7 border border-[#F1E4E6] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/clipboard.svg" alt="" />
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">
                  Skrining Risiko
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Isi beberapa informasi kesehatan untuk mendapatkan hasil
                  prediksi risiko diabetes.
                </p>
              </div>
              <div className="p-7 border border-[#F1E4E6] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/brain.svg" alt="" />
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">
                  Prediksi Berbasis ML
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Data yang Anda masukkan dianalisis menggunakan model machine
                  learning untuk memperkirakan tingkat risiko.
                </p>
              </div>
              <div className="p-7 border border-[#F1E4E6] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-2">
                  <img src="/icons/chart.svg" alt="" />
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">
                  Hasil Mudah Dipahami
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  Hasil skrining ditampilkan secara sederhana sehingga lebih
                  mudah dipahami oleh pengguna.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFF8F9]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center">
              <span className="text-sm font-semibold text-[#B4233C]">
                Cara Kerja
              </span>
              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                Skrining dalam tiga langkah sederhana
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="relative mx-auto w-16 h-16 rounded-full bg-[#B4233C] text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">Isi Data</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Masukkan beberapa informasi kesehatan yang dibutuhkan.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#B4233C] text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">
                  Analisis Data
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Sistem menganalisis data menggunakan model machine learning.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#B4233C] text-white flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="mt-5 font-semibold text-[#1F2937]">
                  Lihat Hasil
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Dapatkan hasil skrining dan informasi terkait risiko Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex items-center gap-16">
              <div className="w-1/2">
                <span className="text-sm font-semibold text-[#B4233C]">
                  Teknologi
                </span>
                <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                  Didukung teknologi machine learning
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#6B7280]">
                  Diabeta menggunakan model machine learning yang telah dilatih
                  menggunakan data kesehatan untuk membantu memperkirakan risiko
                  diabetes berdasarkan karakteristik yang diberikan pengguna.
                </p>
                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-1">
                      <img src="/icons/check.svg" alt="" />
                    </div>
                    <span className="text-sm text-[#4B5563]">
                      Analisis data secara otomatis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-1">
                      <img src="/icons/check.svg" alt="" />
                    </div>
                    <span className="text-sm text-[#4B5563]">
                      Hasil ditampilkan secara sederhana
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FCE7EB] flex items-center justify-center text-[#B4233C] p-1">
                      <img src="/icons/check.svg" alt="" />
                    </div>
                    <span className="text-sm text-[#4B5563]">
                      Membantu meningkatkan kesadaran kesehatan
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="h-88 bg-[#FFF8F9] rounded-2xl flex items-center justify-center">
                  <div className="w-75 bg-white rounded-xl shadow-sm border border-[#F3DDE1] p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#6B7280]">
                        Hasil Skrining
                      </span>
                    </div>
                    <div className="flex justify-center mt-7">
                      <div className="w-20 h-20 rounded-full bg-[#FCE7EB] flex items-center justify-center p-3">
                        <img src="/icons/check-circle.svg" alt="" />
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <span className="text-xs font-medium text-[#6B7280]">
                        Hasil Prediksi
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-[#B4233C]">
                        Tidak Terindikasi Diabetes
                      </h3>
                      <p className="mt-3 text-xs leading-5 text-[#6B7280]">
                        Berdasarkan data yang dimasukkan, sistem tidak
                        memprediksi adanya diabetes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8F9]">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold ">
              Sudah siap mengenali risiko diabetes Anda?
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6B7280]">
              Luangkan beberapa menit untuk melakukan skrining dan mulai lebih
              peduli terhadap kesehatan Anda.
            </p>
            <div className="w-[20rem] mx-auto py-8">
              <Button url="/skrining">Mulai Skrining Sekarang</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
