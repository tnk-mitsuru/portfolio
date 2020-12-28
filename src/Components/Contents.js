import { Link } from 'react-router-dom';
import styles from '../styles/contents.module.css';

function Contents() {
  return (
    <div className={`mainBlockMargin ${styles.contents}`}>
      <section className={styles.webDesign}>
        <Link to="/WebDesign">
          <div className={styles.contntArt}></div>
          <div className={styles.headingWrapper}><h2>ウェブデザイン</h2></div>
        </Link>
      </section>
      <section className={styles.conceptArt}>
        <Link to="/ConceptArt">
          <div className={styles.contntArt}></div>
          <div className={styles.headingWrapper}><h2>コンセプトアート</h2></div>
        </Link>
      </section>
      <section>
        <Link to="/Other"><h2 className="text">その他スキルについて</h2></Link>
      </section>
    </div>
  );
}

export default Contents;
