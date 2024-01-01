// Navbar.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import style from '../styles/nav.module.css'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Navbar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 767);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

const MobileNav: React.FC = () => {
  const [showDisplay, setShowDisplay] = useState(false);
  

  const handleBtn = () => {
    setShowDisplay(!showDisplay)
    setTimeout(() => {
      console.log(showDisplay)
    }, 1000)
  }

  const classMobUL = 'w-screen flex flex-end space-x-4 justify-end pr-6 items-center '

  return (
  <nav className='w-screen relative h-20 bg-red-800 flex'>
    { }
      <button onClick={handleBtn} >{showDisplay? "Hello": "goodbye"}</button>

      <ul className={classMobUL}>
        <li className='m-0 p-0'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/about">
        About
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/blogs">
            Blog
          </Link>
        </li>
      </ul>
    </nav>)
};

const DesktopNav: React.FC = () => {
  return <p>Desktop</p>
};

export default Navbar;
