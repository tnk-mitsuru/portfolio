import { Link } from 'react-router-dom';

function Contents() {
  return (
    <div className="Contents">
        <section>
          <h2>Webデザイン</h2>
            <Link to="/WebDesign">Webデザインについて</Link>
        </section>
        <section>
          <h2>コンセプトアート</h2>
            <Link to="/ConceptArt">コンセプトアートについて</Link>
        </section>
        <section>
          <h2>その他スキル</h2>
            <Link to="/Other">その他スキルについて</Link>
        </section>
    </div>
  );
}

export default Contents;
