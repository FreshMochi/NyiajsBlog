import { Inter } from 'next/font/google'
import bgImg from '../public//Wallpaper.jpg'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const style = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }
  return (
    <div className={'w-full max-w-96 relative flex'}>
      <div className={`blur-sm -z-50`}>
        <Image
        sizes='full'
        style={style}
        src={bgImg} 
        priority
        alt="Hero Image"/>
      </div>
      <div className='absolute' >
        <h1>

        Happy
        </h1>
      </div>
    </div>
  )
}
