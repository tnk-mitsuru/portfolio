import styles from '../styles/sns.module.css';
import twitter from '../images/icon_twitter.svg';
import note from '../images/icon_note.svg';
import github from '../images/icon_instagram.svg';

export default function Sns() {
  return (
    <div className="mainBlock">
      <div className="mainBlockMargin">
        <section>
          <h2 className="headingH2">Contact &amp; SNS</h2>
          <ul className={styles.accounts}>
            <li>
                <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={twitter} alt="twitterアカウント"/>@artist_mitsuru</a>
            </li>
            <li className={styles.account}>
                <a href="https://note.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={note} alt="noteアカウント"/>@artist_mitsuru</a>
            </li>
            <li className={styles.account}>
                <a href="https://www.instagram.com/artist.mitsuru/" target="_blank" rel="noreferrer"><img src={github} alt="Instagramアカウント"/>@tnk-mitsuru</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
