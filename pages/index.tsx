import { Inter } from 'next/font/google'
import style from '../styles/index.module.css'
import bgImg from '../public//Wallpaper.jpg'
import jukkeIcon from '../public/Jukke-icon.svg'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import MyForm from '@/components/form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    // State to control the visibility of the iframe
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
      // Set a timer to change the showIframe state after 1 second
      const timer = setTimeout(() => {
        setShowIframe(true); // After 1 second, set showIframe to true
      }, 1000);
  
      // Clear the timer if the component unmounts before the timer finishes
      return () => clearTimeout(timer);
    }, []); // The empty dependency array ensures this effect runs only once after the initial render
  
  return (
    <div className={style.container}>
      <div className={style.heroContainer}
      
      >
        <div 
        className='heroBG'>
          <Image
          src={bgImg} 
          fill
          alt="Hero Image"/>
        </div>

        <div className={style.iconSVG} >
        <Image
          style={{overflow: 'hidden', height: 'inherit', width: 'inherit'}}
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
          Welcome to Nyiaj's blog. I'm a self-taught Full-Stack Developer, and here, 
          I'll share my work and the inspiration I draw from talented individuals worldwide. 
          My goal is to give back to the community that has supported me.
          </p>
        </div>
      </div>

      <div className={style.contentSec01}>
        <>
          <h2 style={{textAlign: 'center'}}>Tech Stack</h2>
          <div style={{position: 'relative'}}>
            { showIframe ? <iframe style={{margin: '0 auto'}} src='https://my.spline.design/untitled-56540e8deb71882ed4a5525ed41768c7/' 
            width='200px' height='220px'></iframe> : '' }
            <div style={{position: 'relative'}}>
              <ul className={style.techStack} >
                <li>Html</li>
                <li>CSS</li>
                <li>Framer Motion</li>
                <li>Spline</li>
                <li>JavaScript</li>
                <li>React & NEXTJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Google Firebase</li>
                <li>Github</li>
              </ul>

            </div>
          </div>
        </>
      </div>
      <div>
        <h2>
          Looking
        </h2>
        <p>Contact me on</p>
      </div>
      <div className={style.signForm}>
        <MyForm/>
      </div>
      
    </div>
  )
}
