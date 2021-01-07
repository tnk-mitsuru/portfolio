import styles from '../styles/process.module.css';
import lough from '../images/lough.jpg';

function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのトップページに使っているカバー画像を例に、簡単にその作業プロセスを紹介します。<br />カバー画像は、現在制作中の絵本『つよくなったライアスといじわるベラ（仮）』のコンセプトアートです。</p>
          <div className={styles.chart}>
            <div>
              <dl>
                <dt>リサーチ</dt>
                <dd>ざっくりした世界観やキャラクターの性質、場面イメージから、類似する映画やゲームのリファレンスを集めます。<br />イラストのアイディアを広げつつ、方向性に目星をつけていきます。</dd>
              </dl>
              <dl>
                <dt>場面、状況設定（UXデザイン）</dt>
                <dd>作品の目的や、見る人に感じて欲しいこと、こちらが伝えたいことを整理して、時代や場面、状況の設定を行います。</dd>
              </dl>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.text}>
                <dl>
                  <dt>構図の作成</dt>
                  <dd>数枚のサムネイルスケッチから、最も要件を満たす1枚を決めます。場面、状況設定をもとに、ラインやシェイプを組み立て、視線誘導を設計します。</dd>
                </dl>
                <dl>
                  <dt>ラフ</dt>
                  <dd>以上の設計をもとに、人や建物、アイテムをラフに描いていきます。フォトバッシュなどで簡単に着彩し、ライティングの目星もつけていきます。</dd>
                </dl>
              </div>
              <figure>
                <img src={lough} alt="ラフ"/>
                <figcaption>ラフ</figcaption>
              </figure>
            </div>
            <div>
              <dl className={styles.noBorder}>
                <dt>清書</dt>
                <dd>主役のシルエットを整えたり、光と陰影、コントラストを調整し、細部まで描き込みます。<br />公開作品の場合はここに時間をかけます。</dd>
              </dl>
            </div>
          </div>
          <p className="text">制作期間は10日ほどでした。SNSのプロフィールにも使う想定で、<br />背景など丁寧に清書したので、清書に6日ほどかかりました。<br />プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }
  
  export default ProcessWebDesign;
  