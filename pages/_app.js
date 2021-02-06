import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import React from 'react';
import translations from '@shopify/polaris/locales/ja.json';
// import '@shopify/polaris/dist/styles.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://sdks.shopifycdn.com/polaris/3.18.0/polaris.min.css"
          />
        </Head>
        <AppProvider i18n={translations}>
          <Component { ...pageProps } />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
