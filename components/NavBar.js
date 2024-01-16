import styles from '../styles/Home.module.css';
import {getImageUrl} from '../styles/utils';

import React, {useState} from 'react';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>

    <nav className={styles.navbar}>
      <a className={styles.titlen} href='/'>Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuButton}
          src={
            menuOpen ? 
            "/close.png":
            "/menu-bar.png"
          }
          alt="*"
          onClick={() => setMenuOpen(!menuOpen )}
        />
        <ul className={`${styles.menuItems} 
          ${menuOpen && styles.menuOpen }
        `}
        onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    </>
    )
}

export default NavBar;