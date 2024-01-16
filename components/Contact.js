import React from 'react';
import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.ccontainer}>
      <div className={styles.ctext}>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.clinks}>
        <li className={styles.clink}>
          <img src="mail-icon.png" alt="Email icon" />
          <a href="mailto:meghavayath2001@gmail.com">meghavayath2001@gmail.com</a>
        </li>
        <li className={styles.clink}>
          <img
            src="linkedin-icon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/meghavayath">linkedin.com/meghavayath</a>
        </li>
        <li className={styles.clink}>
          <img src="github-icon.png" alt="Github icon" />
          <a href="https://www.github.com/meghavayath">github.com/meghatu</a>
        </li>
        <li className={styles.clink}>
          <img src="medium-icon.png" alt="medium icon" />
          <a href="https://www.medium.com/myname">medium.com/meghavayath</a>
        </li>
      </ul>
    </footer>
    </>
  );
}

export default Contact;
