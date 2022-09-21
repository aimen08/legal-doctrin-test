import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { StoreProvider } from 'easy-peasy';
import { store } from '../store/store';

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
