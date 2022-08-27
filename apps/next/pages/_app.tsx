import React from 'react';

import {Provider} from '@app/provider';
import Head from 'next/head';
import 'raf/polyfill';
import type {SolitoAppProps} from 'solito';

if (process.browser) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // quick fix for current react-native-reanimateg error, hope it will be fixed in incoming versions
  window._frameTimestamp = null;
}

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
