import Header from '../Components/Header';
import ContentHeading from '../Components/ContentHeading';
import ProcessWebDesign from '../Components/ProcessWebDesign';

export default function WebDesign() {
  return (
    <div>
      <Header />
      <ContentHeading heading="Web Design" contentName="webDesign"/>
      <div className="mainBlockMargin">
        <p className="text">企画の方向性やイメージなどにもとづいて、UIUXデザイン、ビジュアルデザインをしています。<br />また、プロダクション工程として、フロントエンドの実装（html、css、簡単なjavascript）も行います。</p>
      </div>
      <ProcessWebDesign />
      <section className="mainBlockMargin">
        <h2 className="headingSmall">スキル、使用ツール</h2>
        <p className="text">Photoshop, Sketch, Figma, Prott, html5, Sass, PostCSS, ejs, React, VSCode</p>
      </section>
    </div>
  );
}