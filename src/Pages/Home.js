import Header from '../Components/Header';
import MainArt from '../Components/MainArt';
import Profile from '../Components/Profile';
import Contents from '../Components/Contents';
import Biography from '../Components/Biography';

function Home() {
  return (
    <div>
      <Header />
      <h1>Mitsuru's Art</h1>
      <MainArt />
      <Profile />
      <Contents />
      <Biography />
    </div>
  );
}

export default Home;