import styles from '../styles/Home.module.css';

const Experience = () => {
  return (
    <section className='experience'>
    <div className={styles.experienceContainer}>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>Python Developer - Intern</h3>
            <p>Genpro Research</p>
            <p>3 Months (May 3, 2023 - August 3, 2023)</p>
          </div>
        </div>

        <div className={styles.timelineItemRight}>
          <div className={styles.timelineContent}>
            <h3>Junior Software Engineer</h3>
            <p>IBIL Solutions</p>
            <p>Present</p>
          </div>
        </div>
      </div>
    </div> 
    </section>
  );
};

export default Experience;