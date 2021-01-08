import { Link } from 'react-router-dom';
import styles from '../styles/contentsNav.module.css';

export default function ContentsNav() {
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.contentsNav}`}>
        <section className={styles.webDesign}>
          <Link to="/webdesign">
            <div className={styles.contntArt}></div>
            <div className={styles.heading}><h2>Web Design</h2></div>
          </Link>
        </section>
        <section className={styles.conceptArt}>
          <Link to="/conceptart">
            <div className={styles.contntArt}></div>
            <div className={styles.heading}><h2>Concept Art</h2></div>
          </Link>
        </section>
      </div>
    </div>
  );
}

