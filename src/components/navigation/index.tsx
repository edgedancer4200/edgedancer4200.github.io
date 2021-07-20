import React from "react";
import { Link } from "gatsby";

// styles
import { Header, Menu, Logo } from './styles';

// data
import data from '../../../data.json';

const Navigation: React.FC = () => {
    return (
        <Header>
            <Logo to="/">
                { data.logo.main }
                <span>
                    { data.logo.secondary }
                </span>
            </Logo>
            <Menu>
                <li>
                    <Link to="#resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="#projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="#contact">
                        Contact me
                    </Link>
                </li>
            </Menu>
        </Header>
    )
}

export default Navigation