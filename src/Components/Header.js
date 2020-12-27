import { Link } from 'react-router-dom';
import componentStyles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={componentStyles.header}>
      <h1><Link to="/">Mitsuru's Art</Link></h1>
      <nav>
        <ul>
          <li><Link to="/WebDesign">ウェブデザイン</Link></li>
          <li><Link to="/ConceptArt">コンセプトアート</Link></li>
          <li><Link to="/Other">その他スキル</Link></li>
        </ul>
      </nav>
    </div>
  );
}
