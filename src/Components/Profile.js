import styles from '../styles/profile.module.css'
import twitterIcon from '../images/twitterIcon.png'

function Profile() {
  return (
    <div className="mainBlock">
      <div className="mainBlockMargin">
        <section>
          <div className={styles.name}>
            <h2>みつる</h2>
            <div className={`text ${styles.twitterAccount}`}>
              <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="twitterアカウント" />
              </a>
            </div>
          </div>
          <p className="text">
            Webデザイナー。コンセプトアートも描いています。<br/>
            ポートフォリオとして、制作物や思考プロセスを掲載しています。本サイトも自分でデザイン、実装しています。
          </p>
        </section>
      </div>
    </div>
  );
}

export default Profile;
