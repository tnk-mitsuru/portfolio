import styles from '../styles/process.module.css'

function ProcessWebDesign() {
    return (
      <div className="mainBlock">
        <section className={`mainBlockMargin ${styles.process}`}>
          <h2 className="headingH2">作業工程</h2>
          <p className="text">本サイトのトップページに使っているカバー画像を例に、簡単にその作業プロセスを紹介します。</p>
          <div className={styles.chart}>
            <dl>
              <dt>リサーチ</dt>
              <dd><p>企画要件に応じて、類似する映画のシーンなどのリファレンスを集めます。<br />イラストのアイディアを広げつつ、方向性に目星をつけていきます。</p></dd>
            </dl>
            <dl>
              <dt>UXデザイン</dt>
              <dd className={`${styles.image} ${styles.uxDesign}`}><p>作品の目的や、見る人に感じて欲しいこと、製作者が伝えたいことを整理して、時代設定、状況設定を行います。</p></dd>
            </dl>
            <dl>
              <dt>構図の検討・作成</dt>
              <dd><p>4枚ほどのサムネイルスケッチから、最も要件を満たす1枚を決めます。<br />UXデザインをもとに、ラインやシェイプを組み立て、視線誘導を設計します。</p></dd>
            </dl>
            <dl>
              <dt>ラフ</dt>
              <dd><p>以上の設計をもとに、人や建物、アイテムをラフに描いていきます。<br />フォトバッシュなどで簡単に着彩し、ライティングの目星もつけていきます。</p></dd>
            </dl>
            <dl>
              <dt>清書</dt>
              <dd><p>主役のシルエットを整えたり、光と陰影、コントラストを調整し、細部まで描き込みます。<br />公開作品の場合はここに時間をかけます。</p></dd>
            </dl>
          </div>
          <p className="text">このカバー画像の制作時間です。全体で10日ほどかかりました。</p>
          <ul className={styles.productionTime}>
            <li>リサーチ：1日</li>
            <li>UXデザイン：4時間</li>
            <li>構図の検討・作成：3時間</li>
            <li>ラフ：1日</li>
            <li>清書：6日</li>
          </ul>
          <p className="text">本作品は、公開するカバー画像ということで、清書に時間をかけています。<br />プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
        </section>
      </div>
    );
  }
  
  export default ProcessWebDesign;
  