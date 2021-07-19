import React from "react";
import { default as Layout } from 'react-masonry-css';
// components
import ProjectCard from '../project_card';
// styles
import './styles.css';
// TODO: mover a un cms
import { projects } from './data';
const ProjectsSection = () => {
    const breakpointColumns = {
        default: 2,
        1100: 2,
        700: 2,
        600: 1
    };
    return (React.createElement("section", { id: "projects" },
        React.createElement("h3", null, "a collection of selected work"),
        React.createElement(Layout, { breakpointCols: breakpointColumns, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, projects.map((project, idx) => React.createElement(ProjectCard, { project: project, key: idx })))));
};
export default ProjectsSection;
