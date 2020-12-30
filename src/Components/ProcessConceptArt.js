import styles from '../styles/process.module.css'

function ProcessWebDesign() {
    return (
      <section className={`mainBlockMargin ${styles.process}`}>
        <h2 className="headingSmall">作業工程</h2>
        <p className="text">本サイトの表紙に使っている作品を例に、簡単にその作業プロセスを紹介します。</p>
        <div className={styles.chart}>
          <dl>
            <dt>リサーチ</dt>
            <dd><p>企画要件に応じて、書籍やネット検索、類似する映画のシーンなどからリファレンスを集めて、構成の方向性に目星をつけます。</p></dd>
          </dl>
          <dl>
            <dt>UXデザイン</dt>
            <dd className={`${styles.image} ${styles.uxDesign}`}><p>作品の目的、見る人に感じて欲しいことを整理して、時代や状況を設定します。</p></dd>
          </dl>
          <dl>
            <dt>構図の作成</dt>
            <dd><p>サムネイルスケッチ、ライン、シェイプ、簡単なライティング</p></dd>
          </dl>
          <dl>
            <dt>ラフに着彩</dt>
            <dd><p>フォトバッシュなどを使い、簡単に着彩していきます。</p></dd>
          </dl>
          <dl>
            <dt>ディティールを詰める</dt>
            <dd><p>主役のシルエットを整えたり、コントラストを調整します。</p></dd>
          </dl>
        </div>
        <p className="text">プロセスの詳細や、各工程の具体的なアウトプット、工夫したことなどは<a href="https://">note</a>にまとめています。</p>
      </section>
    );
  }
  
  export default ProcessWebDesign;
  