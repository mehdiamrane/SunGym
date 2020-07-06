//toujours introduire ce code a la creation d'un nouveau projet
import React from 'react';
import App from 'next/app';
import { AuthProvider } from 'context/auth';

import 'styles.css';

// Ajoute le script tag requis dans le head automatiquement
import { loadStripe } from '@stripe/stripe-js';
// Stripe UI components
import { Elements } from '@stripe/react-stripe-js';
// Async loads stripe and makes it available in the app
export const stripePromise = loadStripe(
  'pk_test_51GyvWHAIdmFzhJyA75QNsswKk6oU6uwWIt1F6lHFRhuBuxE987KgNbdKg1AAawCfy2RpM3EkEASubc9G5HUZcivh00ArRUDQbY'
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </AuthProvider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
