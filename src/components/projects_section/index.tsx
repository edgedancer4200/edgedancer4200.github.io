import React, { useState, useEffect } from "react";
import axios from 'axios';
import { default as Layout } from 'react-masonry-css';

// components
import ProjectCard from '../project_card';

// styles
import { Section } from './styles';
import './masonry-styles.css';

// config
import { LIST_PRJ } from '../../config';

// interfaces
import { ProjectI } from '../../interfaces';

// react-masonry-css params
const breakpointColumns = {
    default: 2,
    1100: 2,
    700: 2,
    600: 1
};

const ProjectsSection: React.FC = () => {
    const [prj, setPrj] = useState<ProjectI[]>([]);

    useEffect(() => {
        fetchPRJ();
    }, []);

    const fetchPRJ = async () => {
        const res: any = await axios.get(LIST_PRJ);
        if (res) setPrj(res.data);
    }

    return (
        <Section id="projects">
            <h3>
                a collection of selected work
            </h3>
            <Layout
            breakpointCols={ breakpointColumns }
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {
                prj.map((project, idx) => <ProjectCard project={project} key={idx} />)
            }
            </Layout>
        </Section>
    )
}

export default ProjectsSection