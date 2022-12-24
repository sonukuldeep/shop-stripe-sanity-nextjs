import React from 'react';
import { Toaster } from 'react-hot-toast';
import DataState from "../context/DataState.js"
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <DataState>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </DataState>
    </StateContext>
  )
}

export default MyApp
