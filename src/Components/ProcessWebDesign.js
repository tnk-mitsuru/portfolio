import styles from '../styles/process.module.css'
  
export default function ProcessWebDesign() {
    return (
      <section className="mainBlockMargin">
        <h2 className="headingSmall">作業工程</h2>
        <p className="text">本サイトのデザインから実装までを例に、簡単にその作業プロセスを紹介します。</p>
        <table className="tableSimple">
          <tbody>
            <tr>
              <th>UXデザイン</th>
              <td>ポートフォリオの型や、他のアーティストの型のWebサイトなどをリサーチしながら、Webサイトの目的、ターゲット、ユーザーゴール、ビジネスゴールを整理します。</td>
            </tr>
            <tr>
              <th>UIデザイン</th>
              <td>ワイヤーフレーム、画面設計</td>
            </tr>
            <tr>
              <th>ビジュアルデザイン</th>
              <td>色彩設定、タイポグラフィ</td>
            </tr>
            <tr>
              <th>コーディング</th>
              <td>HTML5,CSS3。今回はReact、PostCss</td>
            </tr>
          </tbody>
        </table>
        <p className="text">詳細はこちら</p>
      </section>
    );
  }  