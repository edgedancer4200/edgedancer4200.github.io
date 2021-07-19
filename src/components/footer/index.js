import React from "react";
import { Divisor, Info } from './styles';
import { Link } from "gatsby";
const Footer = () => {
    return (React.createElement(Divisor, null,
        React.createElement(Info, null, "Carlos Barrios \u00A92021"),
        React.createElement(Info, null, "LAST UPDATED \u2014 Jul 17, 2021"),
        React.createElement(Link, { to: "#showcase" }, "back to top")));
};
export default Footer;
