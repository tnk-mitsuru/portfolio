import commonStyles from '../styles/common.module.css';
import componentStyles from '../styles/profile.module.css';

function Profile() {
  return (
    <div className={commonStyles.mainBlockMargin}>
      <section>
        <h2 className={commonStyles.headingSmall}>みつる</h2>
        <p className={commonStyles.text}>Webデザイナー、コンセプトアーティスト。</p>
        <p className={commonStyles.text}>contact:<a href="https://twitter.com/artist_mitsuru" target="_blank" rel="noreferrer">twitter</a></p>
      </section>
    </div>
  );
}

export default Profile;
