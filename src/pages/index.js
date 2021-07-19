import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// local components
import Navigation from '../components/navigation';
import ProjectsSection from '../components/projects_section';
import Footer from '../components/footer';
import Showcase from '../components/showcase';
import Contact from '../components/contact';
// styles
import '../assets/global.css';
const IndexPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "\u0950 Carlos Barrios, developer")),
        React.createElement(Navigation, null),
        React.createElement(Showcase, null),
        React.createElement(ProjectsSection, null),
        React.createElement(Contact, null),
        React.createElement(Footer, null)));
};
export default IndexPage;
