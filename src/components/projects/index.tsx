import React from 'react'
import { default as Layout } from 'react-masonry-css' // eslint-disable-line

// components
import ProjectCard from '../project_card'

// styles
import { Section } from './style'
import './masonry-styles.css'

// config
import data from '../../../data.json'

// react-masonry-css params
const breakpointColumns = {
  default: 2,
  1100: 2,
  700: 2,
  600: 1
}

const ProjectsSection: React.FC = () => {
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
                data.projects.map((project, idx) => <ProjectCard project={project} key={idx} />)
            }
            </Layout>
        </Section>
  )
}

export default ProjectsSection
