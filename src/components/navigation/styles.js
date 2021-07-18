import styled from 'styled-components';
import React from "react";
import { Link } from "gatsby";

const text = '#333333';
const bg = '#F8F8F8';

export const Header = styled.span`
    width: 100%;
    height: 4em;
    padding: 1em 0 1em 0;
    margin: 0;
    top: 0;
    display: flex;
    position: absolute;
    background-color: ${bg};
`;


// https://stackoverflow.com/questions/49639031/styled-components-with-gatsby-link-anchor-tag-css-coloring
export const Logo = styled(props => <Link {...props} />)`
    font-size: 1.3rem;
    margin-left: 2em;
    text-decoration: None;
    font-weight: 700;
    color: ${text};
    position: left;
    margin-right: auto;

    & span {
        display: block;
        margin-top: -5px;
    }
`;


export const Menu = styled.ul`
    margin-top: 1em;
    margin-right: 3em;
    padding-left: .8em;
    
    & li {
        display: inline-block;
        margin-right: 1.2em;

        & a {
            text-decoration: none;
            color: ${text};
            font-size: 1rem;
        }
    }
`;