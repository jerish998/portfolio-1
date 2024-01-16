import styles from '../styles/Home.module.css';

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skill-container">
            <h2 className={`${styles.skills} ${styles.textCenter}`}><span className='fontSize'>Skills</span></h2>
          </div>
          <div className={`${styles.textCenter}`}>
            <ul className={styles.list}>
              <li><SkillItem iconSrc="/python-icon.png" skillName="Python" /></li>
              <li><SkillItem iconSrc="/fastapi-icon.svg" skillName="FastAPI" /></li>
              <li><SkillItem iconSrc="/linux-icon.svg" skillName="Linux" /></li>
              <li><SkillItem iconSrc="/git-icon.svg" skillName="Git" /></li>
              <li><SkillItem iconSrc="/react-icon.svg" skillName="React" /></li>
              <li><SkillItem iconSrc="/docker-icon.svg" skillName="Docker" /></li>
              <li><SkillItem iconSrc="/aws-icon.svg" skillName="AWS" /></li>
              <li><SkillItem iconSrc="/html-icon.svg" skillName="HTML5" /></li>
              <li><SkillItem iconSrc="/css-icon.svg" skillName="CSS" /></li>
              <li><SkillItem iconSrc="/postgresql-icon.svg" skillName="PostgreSQL" /></li>
            </ul>
        </div>
        </section>
        </>
    )
}

const SkillItem = ({ iconSrc, skillName }) => {
    return (
      <span>
        <div className={styles.textCenter}>
          <img src={iconSrc} alt={skillName} className={styles.skillIcon} />
          <p className={styles.skillText}>{skillName}</p>
        </div>
      </span>
    );
  }
  

export default Skills