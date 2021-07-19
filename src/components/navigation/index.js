import React from "react";
import { Link } from "gatsby";
// styles
import { Header, Menu, Logo } from './styles';
const Navigation = () => {
    return (React.createElement(Header, null,
        React.createElement(Logo, { to: "/" },
            "Carlos Barrios,",
            React.createElement("span", null, "Developer")),
        React.createElement(Menu, null,
            React.createElement("li", null,
                React.createElement(Link, { to: "#resume" }, "Resume")),
            React.createElement("li", null,
                React.createElement(Link, { to: "#projects" }, "Projects")),
            React.createElement("li", null,
                React.createElement(Link, { to: "#contact" }, "Contact me")))));
};
export default Navigation;
