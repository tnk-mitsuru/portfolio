import styles from '../styles/profile.module.css'
import twitterIcon from '../images/twitterIcon.png'

function Profile() {
  return (
    <div className="mainBlockMargin">
      <section>
        <h2 className="headingSmall">みつる</h2>
        <p className="text">
          Webデザイナー、コンセプトアーティスト。<br/>
          ポートフォリオとして、成果物や思考プロセスを掲載しています。本サイトも自分でデザイン、実装しています。
        </p>
        <p className={`text ${styles.twitterAccount}`}>
          <span>CONTACT：</span>
          <a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitterアカウント" />
          </a>
        </p>
      </section>
    </div>
  );
}

export default Profile;
