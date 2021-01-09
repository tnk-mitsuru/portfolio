
import styles from '../styles/copyright.module.css';

function Copyright() {
  return (
    <div className={styles.copyright}>
      <footer>
        <small className="textSub"><span className={styles.mark}>&copy;</span><span>2021 MITSURU'S ART</span></small>
      </footer>
    </div>
  );
}

export default Copyright;
