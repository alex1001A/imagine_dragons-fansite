import React from "react";

import logo from "../../images/logo_3.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="imagine" />
    </Link>
  </div>
);

export default Logo;
