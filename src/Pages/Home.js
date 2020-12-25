import MainArt from '../Components/MainArt';
import Profile from '../Components/Profile';
import Contents from '../Components/Contents';
import Biography from '../Components/Biography';

function Home() {
  return (
    <div className="home">
      <MainArt />
      <Profile />
      <Contents />
      <Biography />
    </div>
  );
}

export default Home;