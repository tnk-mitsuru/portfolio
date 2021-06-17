import styles from '../styles/process.module.css';
  
export default function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業プロセス</h2>
          <div className={styles.chart}>
                <dl>
                  <dt>リサーチ</dt>
                  <dd>ポートフォリオの一般的なページ構成や要素を、書籍や参考サイトで調べて、イメージを具体化します。</dd>
                </dl>
                <dl>
                  <dt>UXデザイン</dt>
                  <dd>Webサイトのゴールや、一連のユーザー体験を言語化、可視化することで、必要な要件を洗い出します。</dd>
                </dl>
              <dl>
                <dt>UIデザイン</dt>
                <dd>要件から、画面設計や要素を抽出し、情報の優先度を意識しながら、ワイヤーフレームを作っていきます。</dd>
              </dl>
                <dl>
                  <dt>ビジュアルデザイン</dt>
                  <dd>以上の設計をもとに、ムードボードやカラースキーム、タイトルロゴなどを作り、見た目としての完成形を作ります。</dd>
                </dl>
                <dl className={styles.noBorder}>
                  <dt>プログラミング</dt>
                  <dd>サイトの規模などに応じてフレームワークなどの使用技術を選定し、コードを書いていきます。</dd>
                </dl>
          </div>
          <p className="text">制作期間は3週間ほどでした。<br />今回は、プログラミングしながらビジュアルデザインしたので、厳密には分割できませんが、ビジュアルデザインまで1週間、プログラミングに2週間ほどかかりました。</p>
          <p>コードは<a href="https://github.com/tnk-mitsuru/portfolio" target="_blank" rel="noreferrer">GitHub</a>に、デバッグの過程は<a href="https://qiita.com/tnk-mitsuru/items/3b8c76fcb51e821e8f1a">Qita</a>に公開しています。</p>
        </section>
      </div>
    );
  }