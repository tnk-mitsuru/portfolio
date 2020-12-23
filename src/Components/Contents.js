import { Link } from 'react-router-dom';

function Contents() {
  return (
    <div className="Contents">
        <section>
          <h2>Webデザイン</h2>
            <Link to="/WebDesign">
              <img src="" alt="Webデザインについて"/>
            </Link>
        </section>
        <section>
          <h2>コンセプトアート</h2>
            <Link to="/ConceptArt">
              <img src="" alt="コンセプトアートについて"/>
            </Link>
        </section>
        <section>
          <h2>その他スキル</h2>
            <Link to="/Other">
              <img src="" alt="その他スキルについて"/>
            </Link>
        </section>
    </div>
  );
}

export default Contents;
