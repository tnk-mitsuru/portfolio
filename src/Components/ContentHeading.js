import styles from '../styles/contentHeading.module.css';

export default function CoverArt(props) {
  return (
      <div className={styles.contentHeading}>
        <div className={`${styles.image} ${styles[props.contentName]}`}></div>
        <h1>{props.heading}</h1>
      </div>
  );
}