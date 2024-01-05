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
        blur 
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
          Welcome to Nyiaj's blog. 
          Here, I will document my work.
          I am inspiried by great talented individuals in the world. 
          I wish to give back what the community have given me.
          </p>
        </div>
      </div>

      <div className={style.contentSec01}>
        <h2 style={{textAlign: 'center'}}>About Me</h2>
        <div>
          <p>
            I am an aspiring self-taught web-developer. 
            I've worked with a non profit orgainzation
            and was able to quadruple their average application submission. 
            There will be more websites to come as I will be building
            web-applications for small businesses.
          </p>

        </div>
        <>
          <h2 style={{textAlign: 'center'}}>Tech Stack</h2>
        </>
      </div>
      
    </div>
  )
}
