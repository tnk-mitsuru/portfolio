import Header from '../Components/Header';
import Introduction from '../Components/Introduction';
import ProcessConceptArt from '../Components/ProcessConceptArt';
import Note from '../Components/Note';

export default function ConceptArt() {
  return (
    <div>
      <Header />
      <h1>コンセプトアート</h1>
      <Introduction />
      <ProcessConceptArt />
      <Note />
    </div>
  );
}