import styles from '../styles/process.module.css'
  
export default function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのデザインから実装までを例に、簡単にそのプロセスを紹介します。</p>
          <div className={styles.chart}>
            <dl>
              <dt>リサーチ</dt>
              <dd><p>企画要件に応じて、類似するWebサイトなどのリファレンスを集め、UIUXの方向性に目星をつけます。</p></dd>
            </dl>
            <dl>
              <dt>UXデザイン</dt>
              <dd className={`${styles.image} ${styles.uxDesign}`}><p>Webサイトのターゲット、ゴール、データなどから、<br />ユーザーが体験する一連の動作や感情、思考を整理します。</p></dd>
            </dl>
            <dl>
              <dt>UIデザイン</dt>
              <dd className={`${styles.image} ${styles.wireframe}`}><p>UXを実現するための要素を並べて、ワイヤーフレームを作っていきます。<br />情報に優先度をつけ、学習コストが低くなるように設計します。</p></dd>
            </dl>
            <dl>
              <dt>ビジュアルデザイン</dt>
              <dd className={`${styles.image} ${styles.colorScheme}`}><p>以上の設計をもとに、配色やタイポグラフィなどのガイドを作り、見た目としての完成形を作っていきます。</p></dd>
            </dl>
            <dl>
              <dt>コーディング</dt>
              <dd><p>サイトの規模やスケジュール、協業体制に応じて技術選定し、ワイヤーフレームやビジュアルデザインをもとに、<br />HTML、CSSを書いていきます。</p></dd>
            </dl>
          </div>
          <p className="text">プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }  