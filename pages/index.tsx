import { Inter } from 'next/font/google'
import style from '../styles/index.module.css'
import bgImg from '../public//Wallpaper.jpg'
import jukkeIcon from '../public/Jukke-icon.svg'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.heroContainer}>
        <div 
        className={`
        blur-sm 
        overflow-x-hidden 
        absolute -z-50
        
        `}>
          <Image
          style={{overflow: 'hidden'}}
          priority
          src={bgImg} 
          alt="Hero Image"/>
        </div>
        <div className={style.iconSVG} >
        <Image
          style={{overflow: 'hidden', height: 'inherit'}}
          priority
          src={jukkeIcon} 
          alt="icon"/>
        </div>
        <div className={style.heroContent} >
          <p>
            Nyiaj's Blog
          </p>
        </div>
      </div>
      <div className={style.contentSec00}>
        <div className={style.contentPrint}>
          <p>{process.env.INDEXCONTENT}</p>
        </div>
      </div>
      
    </div>
  )
}
