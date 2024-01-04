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
          <p>
          Welcome to my Nyiaj's blog. 
          Here, I will document my work and which tech stacks I've used.
          I am inspiried by great talents in the world. 
          One day I wish to be able to help those with not just talents, 
          but dedication to keep working on their crafts. 
          One day I hope to encourage generations to come and
          display their crafts. I wish to give back to what the community have given me.
          </p>
        </div>
      </div>
      
    </div>
  )
}
