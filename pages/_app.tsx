import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import {useEffect } from "react";
import NProgress from "nprogress";
import Head from "next/head";
//File Import
import ThemeContextWrapper from "../context/ThemeContextWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({showSpinner: false});
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      console.log(`routeChangeStart ${url}`);
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", (url) => {
      console.log(NProgress.done(true));

      NProgress.done();
    });
  }, [Router]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        ;
      </Head>
      <ThemeContextWrapper>
        <Component {...pageProps} />
      </ThemeContextWrapper>
    </>
  );
}

export default MyApp;
