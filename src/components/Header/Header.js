import React from "react";
import headerLogo from "../../images/logo.png"
import header from './Header.css';

const Header = () => {

  return (
    <div>
      <header className="header">
        <img src={headerLogo} alt="Логотип" className="header-logo" />
      </header>
    </div>
  );
}

export default Header;
