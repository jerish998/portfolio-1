import React from "react";
import styles from '../styles/Home.module.css';

const Intro = () => {
    return (
   
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I am Megha V
                </h1>
                <p className={styles.description}>
                    I am a Junior software Engineer, currently working at IBIL Solutions. thank you </p>
                <a href = "mailto:meghavayath2001@gmail.com" className={styles.contactButton}>Contact Me</a>
            </div>
            <img src="/intro.png" alt="image" className={styles.image} />
        </section>
     
    )
}

export default Intro;
