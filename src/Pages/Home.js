import Header from '../Components/Header';
import CoverArt from '../Components/CoverArt';
import Profile from '../Components/Profile';
import ContentsNav from '../Components/ContentsNav';
import OtherSkill from '../Components/OtherSkill';
import Biography from '../Components/Biography';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <CoverArt />
      <Profile />
      <ContentsNav />
      <OtherSkill />
      <Biography />
    </div>
  );
}