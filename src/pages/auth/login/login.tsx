import { FC, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthLoginMutation } from '../../../generated/graphql';

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const from = location.state?.from?.pathname || '/';
  const [form, setForm] = useState({ username: '', password: '' });
  const [login] = useAuthLoginMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ variables: { input: form } });
    navigate(from, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        placeholder={'Username'}
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <input
        type={'password'}
        placeholder={'Password'}
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <button type={'submit'}>Login</button>
    </form>
  );
};
