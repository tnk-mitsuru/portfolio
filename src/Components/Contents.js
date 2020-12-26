import { Link } from 'react-router-dom';
import commonStyles from '../styles/common.module.css';
import componentStyles from '../styles/contents.module.css';

function Contents() {
  return (
    <div className={commonStyles.mainBlockMargin}>
      <section className={componentStyles.sectionBlock}>
        <h2 className={commonStyles.headingLarge}>Webデザイン</h2>
        <p>
          <Link to="/WebDesign">Webデザインについて</Link>
        </p>
      </section>
      <section className={componentStyles.sectionBlock}>
        <h2 className={commonStyles.headingLarge}>コンセプトアート</h2>
        <p>
          <Link to="/ConceptArt">コンセプトアートについて</Link>
        </p>
      </section>
      <section className={componentStyles.sectionBlock}>
        <h2 className={commonStyles.headingLarge}>その他スキル</h2>
        <p>
          <Link to="/Other">その他スキルについて</Link>
        </p>
      </section>
    </div>
  );
}

export default Contents;
