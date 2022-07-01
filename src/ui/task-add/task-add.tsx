import React, { FC, FormEvent, useEffect, useState } from 'react';
import {
  useProjectCollectionQuery,
  useTaskAddMutation,
} from '../../generated/graphql';

export const TaskAdd: FC = () => {
  const { loading, error, data } = useProjectCollectionQuery();

  const [form, setForm] = useState({ title: '', projectId: '' });
  const [add] = useTaskAddMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ variables: { input: form } });
    setForm({ ...form, title: '' });
  };

  if (loading) return <>'Loading...'</>;
  if (error) return <>`Error! ${error.message}`</>;

  useEffect(() => {
    setForm({ ...form, projectId: data!.projectCollection![0]!.id });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        placeholder={'Task title'}
        value={form.title}
        onChange={event => setForm({ ...form, title: event.target.value })}
      />
      <select
        onChange={event => setForm({ ...form, projectId: event.target.value })}
      >
        {data!.projectCollection!.map((project: any) => (
          <option value={project.id} key={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button type={'submit'}>Add</button>
    </form>
  );
};
