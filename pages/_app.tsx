import type { AppProps } from 'next/app';
import AppProviders from 'components/AppProviders';

if (Boolean(process.env.NEXT_PUBLIC_API_MOCKING) === true) {
  require('mocks');
}

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}
export default App;
