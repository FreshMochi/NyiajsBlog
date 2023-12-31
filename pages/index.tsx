import { Inter } from 'next/font/google'
import style from '../styles/index.module.css'
import bgImg from '../public//Wallpaper.jpg'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.heroContainer}>
        <div className={`blur-sm overflow-x-hidden absolute -z-50`}>
          <Image
          style={{overflow: 'hidden'}}
          priority
          src={bgImg} 
          alt="Hero Image"/>
        </div>
        <div className='' >
            <h1>
              Hello
            </h1>
        </div>
        <div className='' >
          <h1>
            header
          </h1>
        </div>
      </div>
      
    </div>
  )
}
