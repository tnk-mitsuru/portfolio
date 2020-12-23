import mainArt from '../images/mainArt.jpg';

function Header_Main() {
  return (
    <div className="Header_Main">
      <header className="">
        <img src={mainArt} width="900" alt="メインアート" />
      </header>
    </div>
  );
}

export default Header_Main;
