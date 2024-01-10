import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo-image"
          />
        </div>
        <div className="nav-items">
          <ul className="item-list">
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Login/Signup</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header