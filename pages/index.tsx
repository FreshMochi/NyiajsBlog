import { Inter } from 'next/font/google'
import style from '../styles/index.module.css'
import bgImg from '../public//Wallpaper.jpg'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={style.container}>
      <div className={`blur-sm`}>
        <Image
        src={bgImg} 
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
