import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/">
        <img
          className="img_logo"
          src={process.env.PUBLIC_URL + "/images/logo.webp"}
        />
      </Link>
    </div>
  );
}

export default Header;
