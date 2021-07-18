import React from 'react';
import LazyLoad from 'react-lazyload';
import { Card, CardImg, CardLayout } from './styles';

const ProjectCard = (props) => {

    const { project } = props;

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
                                    <a href={ project.links[link].url }>
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