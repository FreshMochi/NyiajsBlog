import Link from 'next/link';
import { useState } from 'react';
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

  const closeMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <nav className={`${style.navbar}`}>

        <button onClick={toggleMobileMenu} className={style.navbarToggle}>
          {showMobileMenu ? "Close Menu" : "Menu"}
        </button>
      <div className={`${showMobileMenu ? ' ' + style.showDisplayMNav : ' ' + style.hideDisplayMNav}`}>
        <ul className={`${style.navLinks} ${showMobileMenu ? style.navActive : ''}`}>
          <li className={style.navItem} onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.navItem} onClick={closeMenu}>
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
