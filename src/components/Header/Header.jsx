import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

import { MENU } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => (
  <section className="header">
    <div className="container">
      <header>
        <Logo />
        <nav className="menu">
          {MENU.map(({ link, name }, index) => (
            <ScrollAnimation key={link} className="menu-item" animateIn="fadeInDown" delay={index * 100} offset={0}>
              <Link to={`/${link}`}>{name}</Link>
            </ScrollAnimation>
          ))}
        </nav>
        <Socials />
      </header>
    </div>
  </section>
);

export default Header;
