import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <header className="">
        <p>ふつうのヘッダー</p>
        <p><Link to="/">Home</Link></p>
      </header>
    </div>
  );
}
