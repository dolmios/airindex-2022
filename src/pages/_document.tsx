/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import { extractCss } from "goober";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
  static async getInitialProps({ renderPage }: DocumentContext): Promise<any> {
    const page = await renderPage();
    const css = extractCss();
    return { ...page, css };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#dc0a0a" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#b91d47" name="msapplication-TileColor" />
          <meta content="#ffc9c9" name="theme-color" />

          <style dangerouslySetInnerHTML={{ __html: " " + this.props.css }} id={"_goober"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
