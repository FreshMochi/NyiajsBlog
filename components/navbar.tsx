import React, { useState, useEffect, FC, } from 'react';
import Link from 'next/link';
import style from '../styles/nav.module.css';
import Image from 'next/image';
import jukkeIcon from '../public/Jukke-icon.svg'

const Navbar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isShrunk, setIsShrunk] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.innerWidth > 767) {
        setIsShrunk(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${style.navbar} ${isShrunk ? style.shrunk : ''}`}>
      <button onClick={toggleMobileMenu} className={style.navbarToggle}>
        {showMobileMenu ? "Close Menu" : "Menu"}
      </button>
      <MobileNav showMobileMenu={showMobileMenu} closeMenu={toggleMobileMenu} />
      <DesktopNav />
    </nav>
  );
};

export default Navbar;

interface MobileNavProps {
  showMobileMenu: boolean;
  closeMenu: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ showMobileMenu, closeMenu }) => {
  return (
    <div className={`${showMobileMenu ? style.showDisplayMNav : style.hideDisplayMNav}`}>
      <div style={{margin: '40px auto 0 auto', height: '200px', width: '200px'}}>
            {/* Icon Image */}
            <Image
                style={{ overflow: 'hidden', height: '200px', width: '200px' }}
                priority
                src={jukkeIcon}
                alt="icon"
            />
          </div>
      <ul className={`${style.navLinks} ${showMobileMenu ? style.navActive : ''}`}>
        <li className={style.navItem} onClick={closeMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navItem} onClick={closeMenu}>
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </div>  
  );
};

const DesktopNav: FC = () => {
  return (
    <ul className={style.desktopNavContainer}>
      <li className={style.deskNavItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={style.deskNavItem}>
        <Link href="/blogs">Blog</Link>
      </li>
    </ul>
  )
}
