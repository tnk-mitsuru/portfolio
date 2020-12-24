import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <nav className="">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/WebDesign">ウェブデザイン</Link></li>
          <li><Link to="/ConceptArt">コンセプトアート</Link></li>
          <li><Link to="/Other">その他スキル</Link></li>
        </ul>
      </nav>
    </div>
  );
}
