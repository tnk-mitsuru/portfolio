import styles from '../styles/process.module.css';
import wireFrame from '../images/wireFrame.png';
import moodboard from '../images/moodboard.png';
  
export default function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのデザインから実装までを例に、簡単にそのプロセスを紹介します。</p>
          <ol className={styles.chart}>
            <li>
              <dl>
                <dt>リサーチ</dt>
                <dd>紙媒体含め、ポートフォリオの一般的なページ構成や要素を、書籍や参考サイトで調べ、<br />UIUXの方向性に目星をつけます。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>UXデザイン</dt>
                <dd>Webサイトのターゲットやゴールから、<br />ユーザーが体験する一連の動作や感情、思考を整理します。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>UIデザイン</dt>
                <dd>UXを実現するための要素に優先度をつけ、画面上に配置していきます。<br />ページ遷移で迷わないように、また、視線移動や操作がシンプルになるように設計します。</dd>
              </dl>
              <div className={styles.image}>
                <figure>
                  <img src={wireFrame} alt="ワイヤーフレーム"/>
                  <figcaption>ワイヤーフレーム</figcaption>
                </figure>
              </div>
            </li>
            <li>
              <dl>
                <dt>ビジュアルデザイン</dt>
                <dd>以上の設計をもとに、配色やタイポグラフィなどのガイドを作り、見た目としての完成形を作っていきます。
                </dd>
              </dl>
              <div className={styles.image}>
                <figure>
                  <img src={moodboard} alt="ムードボード" />
                  <figcaption>ムードボード</figcaption>
                </figure>
              </div>
            </li>
            <li>
              <dl>
                <dt>コーディング</dt>
                <dd>サイトの規模やスケジュール、協業体制に応じて技術選定し、ワイヤーフレームやビジュアルデザインをもとに、<br />HTML、CSSを書いていきます。</dd>
              </dl>
            </li>
          </ol>
          <p className="text">制作期間は、日数では3週間ほどでした。実際は、UIデザインは紙に書き、ビジュアルデザインは実装しながら検討しました。また、勉強のためReactを導入したので、調査やデバッグに時間がかかりました。</p>
          <ul className={styles.productionTime}>
            <li>リサーチ : 数日</li>
            <li>UXデザイン : 4時間</li>
            <li>UIデザイン : 30分</li>
            <li>ビジュアルデザイン : 4時間</li>
            <li>コーディング : 26時間30分</li>
          </ul>
          <p className="text">プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }  