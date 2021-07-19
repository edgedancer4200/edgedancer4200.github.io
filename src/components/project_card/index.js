import React from 'react';
import LazyLoad from 'react-lazyload';
import { Card, CardImg, CardLayout } from './styles';
const ProjectCard = ({ project }) => {
    return (React.createElement(Card, null,
        React.createElement(LazyLoad, null,
            React.createElement(CardImg, { src: project.img.url, alt: project.img.alt })),
        React.createElement(CardLayout, null,
            React.createElement("div", null,
                React.createElement("h3", null, project.title.toUpperCase()),
                React.createElement("p", null, project.desc),
                React.createElement("ul", null, Object.keys(project.links).map((link, idx) => (React.createElement("li", { key: idx },
                    React.createElement("a", { href: project.links[link].url }, project.links[link].title)))))))));
};
export default ProjectCard;
