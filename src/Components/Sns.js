import styles from '../styles/sns.module.css';
import twitter from '../images/icon_twitter.svg';
import note from '../images/icon_note.svg';
import pixiv from '../images/icon_pixiv.png';
import youtube from '../images/icon_youtube.png';

export default function Sns() {
  return (
    <div className="mainBlock">
      <div className="mainBlockMargin">
        <section>
          <h2 className="headingH2">Contact &amp; SNS</h2>
          <ul className={styles.accounts}>
            <li>
                <a href="https://www.youtube.com/c/MitsuruArt" target="_blank" rel="noreferrer"><img src={youtube} alt="YouTubeチャンネル"/>イラストと脳科学に関する考察（動画版）</a>
            </li>
            <li>
                <a href="https://note.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={note} alt="noteアカウント"/>イラストと脳科学に関する考察（テキスト版）</a>
            </li>
            <li>
                <a href="https://www.pixiv.net/users/55276850" target="_blank" rel="noreferrer"><img src={pixiv} alt="pixivアカウント"/>他ファンアートなど全作品集</a>
            </li>
            <li>
                <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer"><img src={twitter} alt="twitterアカウント"/>作品の宣伝、つぶやきなど</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
