import { Link } from "react-router-dom";
import "./Header.css";
import zebraImg from "../assets/fancy zebra 1.png";
import bubbleImg from "../assets/speech-bubble.svg";

const Header = () => {
  return (
    <header className="Header">
      <div className="title">
        <Link className="header-links" to="/">
          <h1>Sebra Events</h1>
        </Link>
        <Link className="header-links" to="/events/bucketlist">
          See your saved Bucket List!
        </Link>
      </div>

      <p className="text">Powered by Ticket Master</p>

      <img className="bubble" src={bubbleImg} alt="" />
      <img className="zebra-pic" src={zebraImg} alt="fancy zebra" />
    </header>
  );
};

export default Header;
