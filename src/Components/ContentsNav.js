import { Link } from 'react-router-dom';
import styles from '../styles/contentsNav.module.css';

export default function ContentsNav() {
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.contentsNav}`}>
        <section className={styles.webDesign}>
          <Link to="/WebDesign">
            <div className={styles.contntArt}></div>
            <div className={styles.headingWrapper}><h2>Web Design</h2></div>
          </Link>
        </section>
        <section className={styles.conceptArt}>
          <Link to="/ConceptArt">
            <div className={styles.contntArt}></div>
            <div className={styles.headingWrapper}><h2>Concept Art</h2></div>
          </Link>
        </section>
      </div>
    </div>
  );
}

