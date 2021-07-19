import * as React from "react";
import { Link } from "gatsby";
import { Section } from "./styles";
const Showcase = () => {
    return (React.createElement(Section, { id: "showcase" },
        React.createElement("p", null),
        React.createElement("p", null,
            "I write software and improve my skills every day as a developer. ",
            React.createElement("br", null),
            React.createElement("span", { style: { marginTop: '10px' } },
                "Got an interest project in mind?",
                React.createElement(Link, { to: "#contact" }, "Let's talk.")))));
};
export default Showcase;
