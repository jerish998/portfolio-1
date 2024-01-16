import { getImageUrl } from "@/styles/utils";
import styles from '../styles/Home.module.css';


const AboutMe=()=>{
    return(<>
    <section className={styles.containera} id="about">
        <h2 className={styles.titlea}>About</h2>
        <div className={styles.contenta}>
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src="/backend.png" alt=""
                    className={styles.aboutImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I am a python developer have done 3 month internship at genpro research, technopark and also done a base line solution called literature monitoring system</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                <img src="/ux-design.png" alt=""
            className={styles.aboutImage}/>
                <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I am a python developer have done 3 month internship at genpro research, technopark and also done a base line solution called literature monitoring system</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                <img src="/devops.png" alt=""
            className={styles.aboutImage}/>
                <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I am a python developer have done 3 month internship at genpro research, technopark and also done a base line solution called literature monitoring system</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </>
    )
}

export default AboutMe;