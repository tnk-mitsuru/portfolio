import styles from '../styles/sns.module.css'
import twitter from '../images/icon_twitter.svg'
import note from '../images/icon_note.svg'
import github from '../images/icon_github.svg'

export default function Sns() {
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.sns}`}>
        <div className={styles.account}>
            <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={twitter} alt="twitterアカウント" width="24"/>@artist_mitsuru</a>
        </div>
        <div className={styles.account}>
            <a href="https://note.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={note} alt="noteアカウント" width="24"/>@artist_mitsuru</a>
        </div>
        <div className={styles.account}>
            <a href="https://github.com/tnk-mitsuru" target="_blank" rel="noreferrer"><img src={github} alt="githubアカウント" width="24"/>@tnk-mitsuru</a>
        </div>
      </div>
    </div>
  );
}
