import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import Footer from '../components/Footer';
import Header from '../components/Header';
import globalStyles from '../styles/globals';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 100_000,
        errorRetryCount: 2,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fetcher: async (path: any): Promise<any> => {
          const res = await fetch(path, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });

          if (!res.ok) {
            const error = new Error('An error occurred while fetching the data.');
            throw error;
          }
          return res.json();
        },
        revalidateOnFocus: false,
        suspense: false,
      }}>
      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
      <style global jsx>
        {globalStyles}
      </style>
    </SWRConfig>
  );
}
