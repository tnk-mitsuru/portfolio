
import styles from '../styles/copyright.module.css';

function Copyright() {
  return (
    <div className={`mainBlockMargin ${styles.copyright}`}>
      <footer>
        <small className="textSub"><span className={styles.mark}>&copy;</span><span>2020 MITSURU'S ART</span></small>
      </footer>
    </div>
  );
}

export default Copyright;
