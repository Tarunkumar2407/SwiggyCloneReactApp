import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { handleSearch } from "./Body"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const handleLoginBtn = () => {
      loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo-image" />
      </div>
      <div className="nav-items">
        <ul className="item-list">
          
          <li>Offers</li>
          <li>Help</li>
          <li onClick={handleLoginBtn}>{loginBtn}</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
