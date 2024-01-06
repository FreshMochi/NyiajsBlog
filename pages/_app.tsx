
import RouterWrapper from '@/components/RouterWrapper'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-hidden'>
    <Navbar />
    <RouterWrapper>
      <Component {...pageProps} />
    </RouterWrapper>
    </div>
)}