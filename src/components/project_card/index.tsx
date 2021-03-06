import React from 'react'
import LazyLoad from 'react-lazyload'
import { Card, CardImg, CardLayout } from './style'

// interfaces
import { ProjectI } from '../../interfaces'

const ProjectCard: React.FC<{ project: ProjectI }> = ({ project }) => {
  return (
        <Card>
            <LazyLoad>
                <CardImg src={ project.img.url } alt={ project.img.alt } />
            </LazyLoad>
            <CardLayout>
                <div>
                    <h3>{ project.title.toUpperCase() }</h3>
                    <p>{ project.desc }</p>
                    <ul>
                        {
                            Object.keys(project.links).map((link, idx) => (
                                <li key={idx}>
                                    <a href={ project.links[link].url } aria-label="resource">
                                        { project.links[link].title }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </CardLayout>
        </Card>
  )
}

export default ProjectCard
