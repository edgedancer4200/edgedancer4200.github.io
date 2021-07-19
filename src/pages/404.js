import React from "react";
import { Link } from "gatsby";
const FourOhFour = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("title", null, "Error 404 Page Not found"),
        React.createElement(Link, { to: "/" }, "Go home"),
        "."));
};
export default FourOhFour;
