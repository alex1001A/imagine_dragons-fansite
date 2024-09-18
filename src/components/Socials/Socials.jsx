import { ul } from "framer-motion/client";
import React from "react";
import { SOCIALS } from "../../utils/constants";

const Socials = () => (
<ul className="socials">
    {SOCIALS.map(({icon, link}) => (
        <li title={icon} className="socials-item" key={icon}>
            <a href={link} target="blank">

            </a>
        </li>
    ))}
</ul>
);

export default Socials;
