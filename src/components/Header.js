import "./Header.css";
import logo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from '../assets/header/theme-switch.png';
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="header_logo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIcon_container">
          <img src={searchIcon} alt="" className="search-icon" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item or User"
        />
      </div>
      <div className="header_Items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitch_container">
        <img src={themeSwitchIcon} alt="" />
        </div>
      </div>
      <div className="login_button">GET IN</div>
    </div>
  );
}

export default Header;
