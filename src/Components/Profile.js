import styles from '../styles/profile.module.css'

function Profile() {
  return (
    <div className="mainBlock">
      <div className="mainBlockMargin">
        <section>
          <div className={styles.name}>
            <div className={styles.icon}></div>
            <h2>みつる</h2>
          </div>
          <p className="text">
            Webデザイナーとして活動しながら、アートやイラストを描いています。<br/>
            ポートフォリオとして、制作物や作業プロセスを掲載しています。本サイトも自分でデザイン、プログラミングしています。
          </p>
        </section>
      </div>
    </div>
  );
}

export default Profile;
