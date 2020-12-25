import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.wapper}>
      <h1><Link to="/">Mitsuru's Art</Link></h1>
      <nav>
        <ul className={styles.lists}>
          <li><Link to="/WebDesign">ウェブデザイン</Link></li>
          <li><Link to="/ConceptArt">コンセプトアート</Link></li>
          <li><Link to="/Other">その他スキル</Link></li>
        </ul>
      </nav>
    </div>
  );
}
