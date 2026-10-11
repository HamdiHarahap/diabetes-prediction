import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Main/HomePage';
import ProtectedRoute from './routes/ProtectedRoute';
import ScreeningPage from './pages/Main/ScreeningPage';
import GuestRoute from './routes/GuestRoute';

const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/skrining"
        element={
          <ProtectedRoute>
            <ScreeningPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
