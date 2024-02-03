import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://saltillo.stepzen.net/api/affable-alligator/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Apikey saltillo::stepzen.net+1000::c5e3ef401778df7e594c5ffa46283fea6ed840d5a4b5f489e81d8ced13cbe9bf',
  },
});

export default client;
