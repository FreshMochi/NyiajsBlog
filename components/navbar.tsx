import Link from 'next/link';
import { useState } from 'react';
import style from '../styles/nav.module.css';

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
        <MobileNav showMobileMenu={showMobileMenu } closeMenu={closeMenu}/>
    </nav>
  );
};

export default Navbar;

type MobileNavProps = {
  showMobileMenu: boolean;
  closeMenu: () => void; // closeMenu should be a function if you want to call it on click
};

const MobileNav: React.FC<MobileNavProps> = ({ showMobileMenu, closeMenu }) => {
  return (
    <div className={`${showMobileMenu ? style.showDisplayMNav : style.hideDisplayMNav}`}>
      <ul className={`${style.navLinks} ${showMobileMenu ? style.navActive : ''}`}>
        <li className={style.navItem} onClick={() => closeMenu()}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navItem} onClick={() => closeMenu()}>
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </div>  
  );
};

const DesktopNav: React.FC = () => {
  return(
    <div>

    </div>
  )
}