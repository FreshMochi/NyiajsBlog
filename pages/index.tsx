import { Inter } from "next/font/google";
import style from "../styles/index.module.css";
import bgImg from "../public//Wallpaper.jpg";
import jukkeIcon from "../public/Jukke-icon.svg";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Form from '../components/form'

const inter = Inter({ subsets: ["latin"] });

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
      <div className={style.heroContainer}>
        <div className={style.heroBG}>
          <Image
            src={bgImg}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Hero Image"
          />
        </div>
        <span className={style.iconSVG}>
          {/* Icon Image */}
          <Image
            style={{ overflow: "hidden", height: "inherit", width: "inherit" }}
            priority
            src={jukkeIcon}
            alt="icon"
          />
        </span>
        <span className={style.heroContent}>
          {/* Text Content */}
          <p>Nyiaj's Blog</p>
        </span>
      </div>

      <div className={style.contentBody}>
        <div className={style.contentSec01}>
            <h2 style={{ textAlign: "center" }}>Tech Stack</h2>
            <div style={{ position: "relative" }}>
              {showIframe ? (
                <iframe
                  style={{ margin: "0 auto" }}
                  src="https://my.spline.design/untitled-56540e8deb71882ed4a5525ed41768c7/"
                  width="300px"
                  height="320px"
                ></iframe>
              ) : (
                ""
              )}
              <div style={{ position: "relative" }}>
                <ul className={style.techStack}>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Framer Motion</li>
                  <li>Spline</li>
                  <li>JavaScript</li>
                  <li>React & NEXTJS</li>
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>PostMan</li>
                  <li>Google Firebase</li>
                  <li>Github</li>
                </ul>
              </div>
            </div>
        </div>

        <div className={style.contentSec00}>
            <h2 style={{ textAlign: "center" }}>About Me</h2>
          <div className={style.contentPrint}>
            <br />
            <p>
              Welcome to Nyiaj's blog, a digital canvas where my journey as a
              self-taught Full-Stack Developer unfolds. Balancing a full-time
              career with the joys of my three loyal dogs, I carve out time to
              innovate and create. My vision? To weave compelling narratives
              into web experiences, bringing them to life with 3D models,
              immersive music, and, eventually, virtual reality through the
              power of C++. For now, my toolkit is JavaScript, but the quest for
              knowledge is ceaseless.
            </p>
            <br />
            <p>
              This website is a living storybook of my adventures in coding—from
              the charm of JavaScript to the dream of one day dancing with C++
              in a virtual reality of my own making. It's a space where articles
              leap from MongoDB into your world, and where my mission is to
              connect, collaborate, and grow alongside the community and
              innovative enterprises.
            </p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}
