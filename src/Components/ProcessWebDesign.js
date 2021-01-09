import styles from '../styles/process.module.css';
  
export default function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのデザインから実装までを例に、簡単にそのプロセスを紹介します。</p>
          <div className={styles.chart}>
                <dl>
                  <dt>リサーチ</dt>
                  <dd>紙媒体含め、ポートフォリオの一般的なページ構成や要素を、書籍や参考サイトで調べ、UIUXの方向性に目星をつけます。</dd>
                </dl>
                <dl>
                  <dt>UXデザイン</dt>
                  <dd>Webサイトのターゲットやゴールから、<br />ユーザーが体験する一連の動作や感情、思考を整理します。</dd>
                </dl>
              <dl>
                <dt>UIデザイン</dt>
                <dd>UXを実現するための要素に優先度をつけ、画面上に配置していきます。<br />ページ遷移で迷わないように、また、視線移動や操作がシンプルになるように設計します。</dd>
              </dl>
                <dl>
                  <dt>ビジュアルデザイン</dt>
                  <dd>以上の設計をもとに、配色やタイポグラフィなどのガイドを作り、見た目としての完成形を作っていきます。
                  </dd>
                </dl>
                <dl className={styles.noBorder}>
                  <dt>コーディング</dt>
                  <dd>サイトの規模やスケジュール、協業体制に応じて技術選定し、ワイヤーフレームやビジュアルデザインをもとに、<br />HTML、CSSを書いていきます。</dd>
                </dl>
          </div>
          <p className="text">制作期間は3週間ほどでした。今回は、実装しながらビジュアルデザインを検討したので、厳密には分割できませんが、ビジュアルデザインまで1週間、コーディングに2週間ほどかかりました。</p>
          <p className="text">プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }  