import commonStyles from '../styles/common.module.css';
// import componentStyles from '../styles/biography.module.css';

function Biography() {
  return (
    <div className={commonStyles.mainBlockMargin}>
      <section>
        <h2 className={commonStyles.headingSmall}>略歴</h2>
        <table>
          <tbody>
            <tr><th>2008-2010</th><td>東京大学大学院 地球惑星科学専攻</td></tr>
            <tr><th>2010- </th><td>大手IT企業 デザイナー</td></tr>
            <tr><th>2017-2018</th><td>放送大学 心理と教育コース</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Biography;
