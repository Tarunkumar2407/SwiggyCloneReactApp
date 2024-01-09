import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREirGFDJfQK__71D8dXX0ocP0evnWczvOkUkRlrHEdg&s"
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

const AppLayoout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

// const heading = React.createElement("h1", {}, "hello world")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoout />);
