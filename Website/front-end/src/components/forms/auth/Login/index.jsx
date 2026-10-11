import Button from '../../../ui/Button';
import InputGroup from '../../../ui/Input';
import { useState } from 'react';
import { login } from '../../../../services/Authentication';
import { useNavigate } from 'react-router-dom';
import { putAccessToken, putRefreshToken } from '../../../../utils/token';

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
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
      const response = await login({
        username: form.username,
        password: form.password,
      });

      alert(response.message || 'Login Berhasil');
      setForm({
        username: '',
        password: '',
      });

      putAccessToken(response.data.accessToken);
      putRefreshToken(response.data.refreshToken);
      localStorage.setItem('userId', response.data.userId);

      navigate('/');
    } catch (err) {
      alert(err.messages);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <InputGroup
          id="username"
          name="username"
          label="Username"
          placeholder="Masukkan username"
          value={form.username}
          onChange={handleChange}
        />
        <InputGroup
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Masukkan password"
          value={form.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
