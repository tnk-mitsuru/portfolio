import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/coverArt.module.css';
import titleLogo from '../images/titleLogo.png';


export default function CoverArt() {
  return (
    <div className={styles.coverArt}>
      <div className={styles.heading}>
        <h1><img src={titleLogo} width={150} alt="Mitsuru's Art"/></h1>
      </div>
      <div className={styles.slideContainer}>
        <Fade arrows={false} duration={4000}>
          <div>
            <div className={`${styles.art} ${styles.art1}`}></div>
          </div>
          <div>
            <div className={`${styles.art} ${styles.art2}`}></div>
          </div>
          <div>
            <div className={`${styles.art} ${styles.art3}`}></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}