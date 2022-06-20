import { FC, FormEvent, useState } from 'react';
import { useMutation } from 'urql';
import { useLocation, useNavigate } from 'react-router-dom';

const AUTH_LOGIN = `
  mutation ($input: AuthLoginInput!) {
    auth {
      login(input: $input) {
        __typename
      }
    }
  }
`;

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const from = location.state?.from?.pathname || '/';
  const [form, setForm] = useState({ username: '', password: '' });
  const [authLoginResult, authLogin] = useMutation(AUTH_LOGIN);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authLogin({ input: form });
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
