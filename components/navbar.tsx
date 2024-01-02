import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";
import style from '../styles/nav.module.css';

// Define motion variants for animations
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className={`${style.navbar}  ${showMobileMenu ? ' ' + style.displayMNav : ''}`}>
      <button onClick={toggleMobileMenu} className={style.navbarToggle}>
        {showMobileMenu ? "Close Menu" : "Menu"}
      </button>
      <ul className={`${style.navLinks} ${showMobileMenu ? style.navActive : ''}`}>
        <li className={style.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
