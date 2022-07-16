import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider as _ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const ApolloProvider: FC = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_APP_GQL_ENDPOINT,
    credentials: 'include',
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
              return navigate('/login', {
                state: { from: location },
                replace: true,
              });
          }
        }
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }
  );

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};
