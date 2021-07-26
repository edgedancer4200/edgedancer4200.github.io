import React from 'react'
import { Link } from 'react-scroll'

// styles
import { Header, Menu, Logo } from './style'

// data
import data from '../../../data.json'

const Navigation: React.FC = () => {
  return (
        <Header>
            <Logo to="/" aria-label="logo">
                { data.logo.main }
                <span>
                    { data.logo.secondary }
                </span>
            </Logo>
            <Menu>
                <li>
                    <Link to="resume" smooth={true}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        Contact me
                    </Link>
                </li>
            </Menu>
        </Header>
  )
}

export default Navigation
