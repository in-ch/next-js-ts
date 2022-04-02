import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar'
import '../styles/globals-style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component 
        {...pageProps} 
      />
    </Layout>
  </>
}

export default MyApp
