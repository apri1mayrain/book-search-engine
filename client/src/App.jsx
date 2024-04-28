import './App.css';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';

// GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Request middleware - adds "authorization" request header containing the JWT token.
const authLink = setContext((_, { headers }) => {
  // Obtain token from local storage
  const token = localStorage.getItem('id_token');
  /*
    Return authorization header with the token, if it exists, or an empty string
    to the context so httpLink can read them.
  */
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/*
    The from function combines an array of individual links into a link chain.
    In other words, the authLink middleware executes prior to making the HTTP
    request to GraphQL API.
*/
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
