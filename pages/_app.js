import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import { useStore } from '../store/store';

import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
