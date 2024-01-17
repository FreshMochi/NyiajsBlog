import Link from 'next/link';
import { useState, useEffect } from 'react';
import style from '../styles/nav.module.css';
import jukkeIcon from '../public/Jukke-icon.svg'
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  const closeMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${style.navbar} ${isShrunk ? style.shrunkNavbar : ''}`}>

        <button onClick={toggleMobileMenu} className={style.navbarToggle}>
          {showMobileMenu ? "Close Menu" : "Menu"}
        </button>
        <MobileNav isShrunk={isShrunk} showMobileMenu={showMobileMenu} closeMenu={closeMenu}  />
      
    </nav>
  );
};

export default Navbar;


const MobileNav: React.FC<{ isShrunk: boolean; showMobileMenu: boolean; closeMenu: () => void; }> = ({ isShrunk, showMobileMenu, closeMenu }) => (
  <div className={`${isShrunk ? style.shrunkNavbar : ''} ${showMobileMenu ? ' ' + style.showDisplayMNav : ' ' + style.hideDisplayMNav} `}>
    <ul className={`${style.navLinks} ${showMobileMenu ? style.navActive : ''} `}>
      <div className={style.mobileNavIcon}>
        <Image
            style={{ overflow: 'hidden', height: 'inherit', width: 'inherit' }}
            src={jukkeIcon}
            alt="icon"
        />
      </div>
      <li className={style.navItem} onClick={() => closeMenu()}>
        <Link href="/">Home</Link>
      </li>
      <li className={style.navItem} onClick={() => closeMenu()}>
        <Link href="/blogs">Blog</Link>
      </li>
    </ul>
  </div>
);
