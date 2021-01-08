import { Helmet } from 'react-helmet';
import ogpImage from '../images/ogpImage.jpg';

export default function OgpTag() {
  return (
    <Helmet>
      <meta
    name="description"
    content="みつるのポートフォリオサイトです。Webデザインとコンセプトアートの成果物や思考プロセスを掲載しています。"
    />
      <meta property="og:url" content="https://tnk-mitsuru.github.io/portfolio/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mitsuru's Art / Web Design & Concept Art" />
      <meta property="og:description" content="みつるのポートフォリオサイトです。Webデザインとコンセプトアートの成果物や思考プロセスを掲載しています。" />
      <meta property="og:site_name" content="Mitsuru's Art" />
      <meta property="og:image" content={ogpImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@artist_mitsuru" />
      <title>Mitsuru's Art / Web Design & Concept Art</title>
    </Helmet>
  );
}
