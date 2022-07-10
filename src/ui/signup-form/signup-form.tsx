import s from '../login-form/login-form.module.css';
import { TextField } from '../text-field/text-field';
import { Button } from '../button/button';
import { FormEvent, useState } from 'react';
import { useUserSignUpMutation } from '../../generated/graphql';

export const SignUpForm = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const [signUp] = useUserSignUpMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUp({ variables: { input: form } });
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
        Sign up
      </Button>
    </form>
  );
};
