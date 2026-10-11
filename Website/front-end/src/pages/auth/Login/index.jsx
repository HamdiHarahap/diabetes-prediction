import { Link } from 'react-router-dom';
import LoginForm from '../../../components/forms/auth/Login';
import AuthLayout from '../../../layout/Auth';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const LoginPage = () => {
  useDocumentTitle('Login | Diabeta');

  return (
    <AuthLayout
      title="Login ke Diabeta"
      description="Pantau kesehatanmu dan kenali risiko diabetes sejak dini."
      footer={
        <>
          Belum punya akun?{' '}
          <Link
            to="/register"
            className="font-medium text-[#B4233C] hover:text-[#981B31]"
          >
            Daftar sekarang
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
