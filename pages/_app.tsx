import React from 'react';
import { Toaster } from 'react-hot-toast';
import DataState from "../context/DataState.js"
import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <DataState>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </DataState>
  )
}

export default MyApp
