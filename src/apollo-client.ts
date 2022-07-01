import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_GQL_ENDPOINT,
  credentials: 'include'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});