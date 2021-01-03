import styles from '../styles/biography.module.css'

export default function Biography() {
  return (
    <div className="mainBlock">
      <div className={`mainBlockMargin ${styles.biography}`}>
        <section>
          <h2 className="headingSmall">略歴</h2>
          <table className="tableSimple">
            <tbody>
              <tr><th>2008 - 2010</th><td>東京大学大学院 地球惑星科学専攻</td></tr>
              <tr><th>2010 - 現在</th><td>大手IT企業 デザイナー</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
