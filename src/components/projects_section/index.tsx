import React from "react";
import { default as Layout } from 'react-masonry-css';

// components
import ProjectCard from '../project_card';

// styles
import './styles.css';

// TODO: mover a un cms
import { projects } from './data';

const ProjectsSection: React.FC = () => {

    const breakpointColumns = {
        default: 2,
        1100: 2,
        700: 2,
        600: 1
    };

    return (
        <section id="projects">
            <h3>
                a collection of selected work
            </h3>
            <Layout
            breakpointCols={ breakpointColumns }
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {
                    projects.map((project, idx) => <ProjectCard project={project} key={idx} />)
                }
            </Layout>
        </section>
    )
}

export default ProjectsSection