import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/forms/auth/Register';
import AuthLayout from '../../../layout/Auth';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const RegisterPage = () => {
  useDocumentTitle('Register | Beranda');

  return (
    <AuthLayout
      title="Buat Akun Diabeta"
      description="Mulai langkah kecil untuk memahami dan menjaga kesehatanmu."
      footer={
        <>
          Sudah punya akun?{' '}
          <Link
            to="/login"
            className="font-medium text-[#B4233C] hover:text-[#981B31]"
          >
            Login
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
