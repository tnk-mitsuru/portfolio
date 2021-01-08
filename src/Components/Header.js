import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/WebDesign">Web Design</NavLink></li>
          <li><NavLink to="/ConceptArt">Concept Art</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
