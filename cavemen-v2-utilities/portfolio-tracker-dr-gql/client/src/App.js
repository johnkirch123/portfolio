import './App.css';
// import { request, gql, GraphQLClient } from 'graphql-request';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery
} from '@apollo/client';
import Collections from './components/Collections';

function App() {
  const client = new ApolloClient({
    uri: 'https://gateway.deadrare.io/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <h1>List of Collections</h1>
      <div className='App'>
        <Collections />
      </div>
    </ApolloProvider>
  );
}

export default App;
