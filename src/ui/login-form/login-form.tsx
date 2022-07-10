import { FC, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './login-form.module.css';
import { useAuthLoginMutation } from '../../generated/graphql';
import { TextField } from '../text-field/text-field';
import { Button } from '../button/button';

export const LoginForm: FC = () => {
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
    <form className={s.box} onSubmit={handleSubmit}>
      <TextField
        type={'text'}
        placeholder={'Username'}
        value={form.username}
        required
        onChange={e => setForm({ ...form, username: e.target.value })}
      />
      <TextField
        type={'password'}
        placeholder={'Password'}
        value={form.password}
        required
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <Button style={{ marginTop: '1rem' }} type={'submit'}>
        Login
      </Button>
    </form>
  );
};
