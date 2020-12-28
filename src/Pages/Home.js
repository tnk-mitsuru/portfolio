import MainArt from '../Components/MainArt';
import Profile from '../Components/Profile';
import Contents from '../Components/Contents';
import OtherSkill from '../Components/OtherSkill';
import Biography from '../Components/Biography';

export default function Home() {
  return (
    <div className="home">
      <MainArt />
      <Profile />
      <Contents />
      <OtherSkill />
      <Biography />
    </div>
  );
}