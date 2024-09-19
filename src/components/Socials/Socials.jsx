import React from "react";
import { ul } from "framer-motion/client";
import Icon from "../Icon/Icon";

import { SOCIALS } from "../../utils/constants";

const Socials = () => (
  <ul className="socials">
    {SOCIALS.map(({ icon, link }) => (
      <li title={icon} className="socials-item" key={icon}>
        <a href={link} target="blank">
          <Icon name={icon}/>
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
