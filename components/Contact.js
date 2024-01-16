import React from 'react';
import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className='row'> 
            <h2 className={styles.title}>Contact Me</h2>
            <form className={styles['contact-form']}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className={styles['global-input-textarea']} type="text" id="name" name="name" placeholder='enter your name'required />
              </div>

              <div className="form-group">
                <label id="email">Email:</label>
                <input className={styles['global-input-textarea']} type="email" id="email" name="email" placeholder='enter your email' required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className={styles['global-input-textarea']} id="message" name="message" rows="4" placeholder='message' required></textarea>
              </div>

              <button className={styles.button} type="submit">Send</button>
            </form>
          </div>
          <div className='row'>
          <div className={styles['social-container']}>
          <ul className={styles['social-links']}>
                <li>
                  <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/github-icon.png" alt="GitHub" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin-icon.png" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@your-medium-profile" target="_blank" rel="noopener noreferrer">
                    <img src="/medium-icon.png" alt="Medium" />
                  </a>
                </li>
              </ul>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
