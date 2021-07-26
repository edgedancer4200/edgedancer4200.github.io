import styled from 'styled-components'
import Device from '../../devices-bpks'

import { Link as GatsbyLink } from 'gatsby'

const text = '#BAC4B8'

export const Header = styled.span`
    width: 100%;
    height: 4em;
    padding: 1em 0 1em 0;
    margin: 0;
    top: 0;
    display: flex;
    position: absolute;
`

// https://stackoverflow.com/questions/49639031/styled-components-with-gatsby-link-anchor-tag-css-coloring
export const Logo = styled(GatsbyLink)`
    font-size: .9rem;
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

    @media ${Device.mobileL} {
        font-size: 1.3rem;
    }
`

export const Menu = styled.ul`
    margin-top: 1em;
    margin-right: 3em;
    padding-left: .8em;
    
    & li {
        display: inline-block;
        margin-right: 35px;

        & a {
            text-decoration: none;
            font-weight: 800;
            font-size: 1.2rem;
            color: ${text};
            cursor: pointer;
        }
    }
`
