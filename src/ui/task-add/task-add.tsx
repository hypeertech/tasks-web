import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';

const TASK_ADD = `
  mutation TaskAdd($input: TaskAddInput!) {
    task {
      add(input: $input) {
        record {
          id
          title
          isCompleted
          dueDate
          ownerId
        }
        recordId
      }
    }
  }
`;

const PROJECT_COLLECTION = `
  query ProjectCollection {
    projectCollection {
      id
      name
    }
  }
`;

export const TaskAdd: FC = () => {
  const [result, reexecuteQuery] = useQuery({
    query: PROJECT_COLLECTION,
  });

  const [form, setForm] = useState({ title: '', projectId: '' });
  const [addResult, add] = useMutation(TASK_ADD);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await add({ input: form });
    setForm({ ...form, title: '' })
  };

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  useEffect(() => {
    setForm({ ...form, projectId: data.projectCollection[0].id })
  }, [])

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
        {data.projectCollection.map((project: any) => (
          <option value={project.id} key={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button type={'submit'}>Add</button>
    </form>
  );
};
