import Header from '../Components/Header';
import ContentHeading from '../Components/ContentHeading';
import ProcessConceptArt from '../Components/ProcessConceptArt';

export default function ConceptArt() {
  return (
    <div>
      <Header />
      <ContentHeading heading="Concept Art" contentName="conceptArt"/>
      <div className="mainBlock">
        <div className="mainBlockMargin">
          <p className="text">ファンタジーやデフォルメした世界観のコンセプトアートを描いています。</p>
        </div>
      </div>
      <ProcessConceptArt />
      <div className="mainBlock">
        <section className="mainBlockMargin">
          <h2 className="headingH2">スキル、使用ツール</h2>
          <p className="text">Photoshop, CLIP STUDIO</p>
        </section>
      </div>
    </div>
  );
}