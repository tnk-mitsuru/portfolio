import Header from '../Components/Header';
import ContentHeading from '../Components/ContentHeading';
import ProcessWebDesign from '../Components/ProcessWebDesign';
import GalleryWebDesign from '../Components/GalleryWebDesign';

export default function WebDesign() {
  return (
    <div>
      <Header />
      <ContentHeading heading="Web Design" contentName="webDesign"/>
      <div className="mainBlock">
        <div className="mainBlockMargin">
          <p className="text">企画の方向性やイメージなどにもとづいて、UIUXデザイン、ビジュアルデザインをします。<br />必要に応じて、フロントエンドの実装（HTML,CSS,簡単なJavaScript）もします。</p>
          <p className="text">ここでは、本サイトのデザインから実装までを例に、簡単にそのプロセスを紹介します。</p>
        </div>
      </div>
      <GalleryWebDesign />
      <ProcessWebDesign />
      <div className="mainBlock">
        <section className="mainBlockMargin">
          <h2 className="headingH2">スキル、使用ツール</h2>
          <p className="text">Photoshop, Sketch, html5, Sass, PostCSS, ejs, React, VSCode</p>
        </section>
      </div>
    </div>
  );
}