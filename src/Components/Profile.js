import styles from '../styles/profile.module.css'

function Profile() {
  return (
    <div className="mainBlock">
      <div className="mainBlockMargin">
        <section>
          <div className={styles.name}>
            <h2>みつる</h2>
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
