import styles from '../styles/process.module.css'

function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのトップページに使っているカバー画像を例に、簡単にその作業プロセスを紹介します。<br />カバー画像は、現在制作中の絵本『つよくなったライアスといじわるベラ（仮）』のコンセプトアートです。</p>
          <ol className={styles.chart}>
            <li>
              <dl>
                <dt>リサーチ</dt>
                <dd>ざっくりした世界観やキャラクターの性質、場面イメージから、類似する映画やゲームのリファレンスを集めます。<br />イラストのアイディアを広げつつ、方向性に目星をつけていきます。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>場面・状況設定（UXデザイン）</dt>
                <dd>作品の目的や、見る人に感じて欲しいこと、こちらが伝えたいことを整理して、時代や場面、状況の設定を行います。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>構図の作成</dt>
                <dd>数枚のサムネイルスケッチから、最も要件を満たす1枚を決めます。<br />UXデザインをもとに、ラインやシェイプを組み立て、視線誘導を設計します。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>ラフ</dt>
                <dd>以上の設計をもとに、人や建物、アイテムをラフに描いていきます。<br />フォトバッシュなどで簡単に着彩し、ライティングの目星もつけていきます。</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>清書</dt>
                <dd>主役のシルエットを整えたり、光と陰影、コントラストを調整し、細部まで描き込みます。<br />公開作品の場合はここに時間をかけます。</dd>
              </dl>
            </li>
          </ol>
          <p className="text">このカバー画像の制作時間です。全体で10日ほどかかりました。</p>
          <ul className={styles.productionTime}>
            <li>リサーチ : 1日</li>
            <li>場面・状況設定 : 4時間</li>
            <li>構図の作成 : 3時間</li>
            <li>ラフ : 1日</li>
            <li>清書 : 6日</li>
          </ul>
          <p className="text">本作品は、公開する作品なので、清書に時間をかけました。<br />プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }
  
  export default ProcessWebDesign;
  