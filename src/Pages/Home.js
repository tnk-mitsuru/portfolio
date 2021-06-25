import Header from '../Components/Header';
import CoverArt from '../Components/CoverArt';
import Profile from '../Components/Profile';
import ContentsNav from '../Components/ContentsNav';
import OtherSkill from '../Components/OtherSkill';
import Biography from '../Components/Biography';
import Sns from '../Components/Sns';

export default function Home() {
  return (
    <div>
      <Header />
      <CoverArt />
      <Profile />
      <ContentsNav />
      <OtherSkill />
      <Biography />
      {/* <Sns /> */}
    </div>
  );
}