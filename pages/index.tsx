import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  ${inter.className}`}
    >
      
      <>
      <iframe src='https://my.spline.design/untitled-1431b0f48f555bb8967e93256535b435/' frameborder='0' width='100%' height='600px'></iframe>
      </>
    </main>
  )
}
