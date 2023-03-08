// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import type { AppProps } from "next/app";
import { createElement } from "react";
import { SWRConfig } from "swr";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalStyles } from "../components/Theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = async (path: string): Promise<any> => {
  const res = await fetch(path, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return res.json();
};

const swrConfigs = {
  dedupingInterval: 100_000,
  errorRetryCount: 2,
  fetcher,
  revalidateOnFocus: false,
  suspense: false,
};

setup(createElement, prefix);

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRConfig value={swrConfigs}>
      <div id="root">
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Analytics />
    </SWRConfig>
  );
}
