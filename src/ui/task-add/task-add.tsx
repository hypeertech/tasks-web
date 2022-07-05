import React, { FC, FormEvent, useEffect, useState } from 'react';
import {
  Project,
  ProjectFieldsFragment,
  useTaskAddMutation,
} from '../../generated/graphql';

export interface TaskAddProps {
  readonly projects: ProjectFieldsFragment[];
  readonly defaultProjectId?: Project['id'];
}

export const TaskAdd: FC<TaskAddProps> = ({ projects, defaultProjectId }) => {
  const [form, setForm] = useState({ title: '', projectId: defaultProjectId });
  const [add] = useTaskAddMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ variables: { input: form } });
    setForm({ ...form, title: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        placeholder={'Task title'}
        value={form.title}
        onChange={event => setForm({ ...form, title: event.target.value })}
      />
      <select
        value={form.projectId}
        onChange={event => setForm({ ...form, projectId: event.target.value })}
      >
        {projects.map(project => (
          <option value={project.id} key={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button type={'submit'}>Add</button>
    </form>
  );
};
