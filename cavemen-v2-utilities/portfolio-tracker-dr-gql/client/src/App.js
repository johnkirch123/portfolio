import './app.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import TickerTape from './components/TickerComponent/TickerTape';
import TwitterFeed from './components/TwitterComponent/TwitterFeed';
import MainArea from './components/MainComponent/MainArea';
import Collections from './components/CollectionComponent/Collections';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';

function App() {
  const client = new ApolloClient({
    uri: 'https://gateway.deadrare.io/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <div className='app'>
        <TickerTape />
        <TwitterFeed />
        <MainArea />
        <Collections />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
