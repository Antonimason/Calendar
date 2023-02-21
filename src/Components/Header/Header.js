import "./Header.css";
import {TiSocialFacebook} from 'react-icons/ti';
import {SlSocialInstagram} from 'react-icons/sl';
import {TiSocialLinkedin} from 'react-icons/ti';

function Header() {
  return (
    <div className="header-container">
      <div>
        <h1>Task App</h1>
      </div>
      <div>
        <a><TiSocialFacebook /></a>
        <a><SlSocialInstagram /></a>
        <a><TiSocialLinkedin /></a>
        <a></a>
      </div>
    </div>
  );
}

export default Header;
