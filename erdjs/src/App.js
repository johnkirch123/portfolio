import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DappUI } from '@elrondnetwork/dapp-core';
import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import './app.css';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

let networkProvider = new ApiNetworkProvider('https://devnet-api.elrond.com');

// let networkProvider = new ProxyNetworkProvider("https://devnet-gateway.elrond.com");

// import '../node_modules/@elrondnetwork/dapp-core/build/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        {/* <DappUI.TransactionsToastList
    toastId?: string,
    title: string,
    shouldRenderDefaultCss?: boolean,
    className?: string
    /> */}
        <Header />
        <DappUI.NotificationModal />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <DappUI.SignTransactionsModals />
      </div>
    </BrowserRouter>
  );
}

export default App;
