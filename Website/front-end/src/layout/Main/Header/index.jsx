import { useState, useEffect } from 'react';
import { getUserLogged, logout } from '../../../services/Authentication';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../../utils/token';
import Button from '../../../components/ui/Button';

const Header = () => {
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = getAccessToken();
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
          setUserLogged(null);
          return;
        }

        const response = await getUserLogged();
        setUserLogged(response.data.username);
      } catch (error) {
        console.error('Gagal mengambil data pengguna:', error);
        setUserLogged(null);
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      alert('Berhasil Logout');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <header className="w-full border-b border-[#F1F1F1] bg-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-[#B4233C]">
          Diabeta
        </a>

        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-medium text-[#1F2937] hover:text-[#B4233C] transition-colors duration-200"
          >
            Beranda
          </a>

          <a
            href="/skrining"
            className="text-sm font-medium text-[#1F2937] hover:text-[#B4233C] transition-colors duration-200"
          >
            Skrining
          </a>

          {userLogged ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                className="flex items-center gap-2 text-sm font-medium text-[#1F2937] hover:text-[#B4233C] transition-colors duration-200"
              >
                <span>{userLogged}</span>

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-44 rounded-lg border border-[#F1F1F1] bg-white shadow-lg z-50">
                  <Button
                    url="/profil"
                    onClick={() => setDropdownOpen(false)}
                    variant="none"
                  >
                    Lihat Profil
                  </Button>
                  <Button onClick={handleLogout} variant="none">
                    Logout
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="text-sm font-medium text-[#B4233C] hover:text-[#981B31] transition-colors duration-200"
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
