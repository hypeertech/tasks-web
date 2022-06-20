import { createClient } from 'urql';

export const client = createClient({
  url: import.meta.env.VITE_APP_GQL_ENDPOINT,
  fetchOptions: {
    credentials: 'include',
  },
});
