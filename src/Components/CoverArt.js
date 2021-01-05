import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/coverArt.module.css';


export default function CoverArt() {
  return (
    <div className={styles.coverArt}>
      <div className={styles.heading}>
        <h1>Mitsuru's Art</h1>
      </div>
      <div className={styles.slideContainer}>
        <Fade arrows={false} duration={4000}>
          <div>
            <div className={styles.image1}></div>
          </div>
          <div>
            <div className={styles.image2}></div>
          </div>
          <div>
            <div className={styles.image3}></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}