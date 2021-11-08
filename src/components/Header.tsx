import { Link } from "react-router-dom";
import "./Header.css";
import zebraImg from "../assets/fancy zebra 1.png";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <Link className="header-links" to="/">
          <h1>Sebra Events</h1>
        </Link>
        <Link className="header-links" to="/events/bucketlist">
          See your saved Bucket List!
        </Link>
      </div>

      <img className="zebra-pic" src={zebraImg} alt="fancy zebra" />
    </header>
  );
};

export default Header;
