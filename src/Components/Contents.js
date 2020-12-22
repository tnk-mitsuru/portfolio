import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import webDesign from './webDesign';

function Contents() {
  return (
    <div className="Contents">
      <Router>
        <section>
          <h2>Webデザイン</h2>
              <Link to="/webDesign">
                <img src="" alt="Webデザインについて"/>
              </Link>
              <Route path='/webDesign' component={webDesign}/>
        </section>
        <section>
          <h2>コンセプトアート</h2>
            <Link to="/">
              <img src="" alt="コンセプトアートについて"/>
            </Link>
        </section>
        <section>
          <h2>その他スキル</h2>
            <Link to="/">
              <img src="" alt="その他スキルについて"/>
            </Link>
        </section>
      </Router>
    </div>
  );
}

export default Contents;
