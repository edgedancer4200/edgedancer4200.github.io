import React from "react";
import { Link } from "gatsby";

// styles
import { Header, Menu, Logo } from './styles';


const Navigation = () => {
    return (
        <Header>
            <Logo to="/">
                Carlos Barrios,
                <span>
                    Developer
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