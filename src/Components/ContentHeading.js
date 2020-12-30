import styles from '../styles/contentHeading.module.css';

export default function CoverArt(props) {
  return (
      <div className={`${styles.image} ${styles[props.contentName]}`}>
        <h1 className="headingLarge">{props.heading}</h1>
      </div>
  );
}