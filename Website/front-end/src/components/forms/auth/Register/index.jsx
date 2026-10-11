import { register } from '../../../../services/Authentication';
import Button from '../../../ui/Button';
import InputGroup from '../../../ui/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    confirm: '',
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

    if (form.password !== form.confirm) {
      alert('Password tidak cocok');
      return;
    }

    try {
      const response = await register({
        username: form.usernae,
        password: form.password,
      });

      alert(response.message || 'Registrasi Berhasil');
      setForm({
        username: '',
        password: '',
        confirm: '',
      });

      navigate('/login');
    } catch (err) {
      alert(err.message);
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

        <InputGroup
          id="confirmPassword"
          name="confirm"
          label="Konfirmasi Password"
          type="password"
          placeholder="Masukkan kembali password"
          value={form.confirm}
          onChange={handleChange}
        />

        <Button type="submit">Daftar</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
