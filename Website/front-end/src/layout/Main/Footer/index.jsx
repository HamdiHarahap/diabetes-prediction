import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between gap-10">
          {/* Column 1 - Brand */}
          <div className="w-1/4">
            <h2 className="text-xl font-bold text-[#FFB3C1]">Diabeta</h2>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              Platform skrining risiko diabetes untuk membantu Anda mengenali
              risiko kesehatan sejak dini.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="w-1/4">
            <h3 className="text-sm font-semibold">Navigasi</h3>

            <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  to="/skrining"
                  className="hover:text-white transition-colors"
                >
                  Skrining
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="w-1/4">
            <h3 className="text-sm font-semibold">Hubungi Kami</h3>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#B4233C] flex items-center justify-center p-2">
                  <img src="/icons/instagram.svg" alt="" className="w-5 h-5 " />
                </div>

                <span className="text-sm text-gray-300">Instagram</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#B4233C] flex items-center justify-center p-2">
                  <img src="/icons/whatsapp.svg" alt="" className="w-5 h-5 " />
                </div>

                <span className="text-sm text-gray-300">WhatsApp</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#B4233C] flex items-center justify-center p-2">
                  <img src="/icons/email.svg" alt="" className="w-5 h-5 " />
                </div>

                <span className="text-sm text-gray-300">Email</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Information */}
          <div className="w-1/4">
            <h3 className="text-sm font-semibold">Tentang Skrining</h3>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              Hasil skrining Diabeta merupakan informasi awal mengenai risiko
              diabetes dan bukan merupakan diagnosis medis.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Diabeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
