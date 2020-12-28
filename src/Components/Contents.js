import { Link } from 'react-router-dom';
import styles from '../styles/contents.module.css';

function Contents() {
  return (
    <div className={`mainBlockMargin ${styles.contents}`}>
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
  );
}

export default Contents;
