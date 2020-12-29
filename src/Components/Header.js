import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li><NavLink to="/">Mitsuru's Art</NavLink></li>
          <li><NavLink to="/WebDesign" activeClassName={styles.active}>ウェブデザイン</NavLink></li>
          <li><NavLink to="/ConceptArt" activeClassName={styles.active}>コンセプトアート</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
