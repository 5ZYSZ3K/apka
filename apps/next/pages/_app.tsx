import React from 'react';

import {Provider} from '@app/provider';
import Head from 'next/head';
import 'raf/polyfill';
import type {SolitoAppProps} from 'solito';

const MyApp: React.FC<SolitoAppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
