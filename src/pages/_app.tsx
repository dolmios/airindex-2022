// eslint-disable-next-line camelcase

import type { AppProps } from 'next/app';

import globalStyles from '../styles/globals';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <header>
        <div className='logo'>
          <div className='spin'>✴︎</div>
          <p>Airindex</p>
        </div>
        <div>
          <button type='button'>Submit</button>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>
        <small>
          &copy; Airindex 2022. All rights reserved. This site is not affiliated with
          Airbnb. Inclusion in this directory does not imply endorsement, and we are not
          responsible for the content of external sites.
        </small>
      </footer>
      <style jsx global>
        {globalStyles}
      </style>
    </main>
  );
}
