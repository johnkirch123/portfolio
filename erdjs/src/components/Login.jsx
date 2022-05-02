import { DappUI } from '@elrondnetwork/dapp-core';
import '../css/login.css';

const Login = () => {
  return (
    <>
      <DappUI.ExtensionLoginButton
        callbackRoute='/dashboard'
        buttonClassName='extension-login'
        loginButtonText='Extension login'
      />
      {/* <DappUI.UnlockPage /> */}
      {/* <DappUI.WalletConnectLoginContainer
        callbackRoute='/'
        loginButtonText='Login with Maiar'
        title='Maiar Login'
        logoutRoute='/unlock'
        className='wallect-connect-login-modal'
        lead='Scan the QR code using Maiar'
        // shouldRenderDefaultCss={shouldRenderDefaultCss}
        // wrapContentInsideModal={wrapContentInsideModal}
        // redirectAfterLogin={redirectAfterLogin}
        // token={token}
        // onClose={onClose}
      /> */}
    </>
  );
};

export default Login;
