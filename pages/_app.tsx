import type { AppProps } from 'next/app.js';
import { Toaster } from 'react-hot-toast';
import DataState from "../context/DataState.js"
import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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
