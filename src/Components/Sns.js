import styles from '../styles/sns.module.css'
import twitterIcon from '../images/twitterIcon.svg'
import noteIcon from '../images/noteIcon.svg'
import githubIcon from '../images/githubIcon.svg'

export default function Sns() {
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.sns}`}>
        <div className={styles.account}>
            <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="twitterアカウント" width="24"/>@artist_mitsuru</a>
        </div>
        <div className={styles.account}>
            <a href="https://note.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={noteIcon} alt="noteアカウント" width="24"/>@artist_mitsuru</a>
        </div>
        <div className={styles.account}>
            <a href="https://github.com/tnk-mitsuru" target="_blank" rel="noreferrer"><img src={githubIcon} alt="githubアカウント" width="24"/>@tnk-mitsuru</a>
        </div>
      </div>
    </div>
  );
}
