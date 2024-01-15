
import RouterWrapper from '@/components/RouterWrapper'
import Form from '@/components/form'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-hidden'>
    <Navbar />
    <RouterWrapper>
        <Component {...pageProps} />
        <Form />
    </RouterWrapper>
    </div>
)}