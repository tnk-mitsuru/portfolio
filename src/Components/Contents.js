import { Link } from 'react-router-dom';
import componentStyles from '../styles/contents.module.css';

function Contents() {
  return (
    <div className={`mainBlockMargin ${componentStyles.contents}`}>
      <section>
        <h2 className="headingLarge">Webデザイン</h2>
        <p>
          <Link to="/WebDesign">Webデザインについて</Link>
        </p>
      </section>
      <section>
        <h2 className="headingLarge">コンセプトアート</h2>
        <p>
          <Link to="/ConceptArt">コンセプトアートについて</Link>
        </p>
      </section>
      <section>
        <h2 className="headingLarge">その他スキル</h2>
        <p>
          <Link to="/Other">その他スキルについて</Link>
        </p>
      </section>
    </div>
  );
}

export default Contents;
