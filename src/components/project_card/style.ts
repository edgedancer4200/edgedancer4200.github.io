import styled from 'styled-components'
import Device from '../../devices-bpks'

const bg = '#333333'

export const Card = styled.div`
    position: relative;
    min-height: 300px;
    background-color: ${bg};
    text-align: center;
    padding: 2em;
    border-radius: 5px;
`

export const CardImg = styled.img`
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`

export const CardLayout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;

    & div {
        color: transparent;

        & h3 {
            font-size: 1.4rem !important;
            text-transform: uppercase;
            padding-bottom: 0 !important;
        }

        & p {
            font-family: 'Poppins';
            padding: 0 2em 2em 2em;
        }

        & ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & li {
                margin-right: 1em;
                font-family: 'Poppins';

                & a {
                    font-size: .8rem;
                    text-decoration: None;
                    color: transparent;
                }
            }

            @media ${Device.mobileM} {
                flex-direction: row;
            }
        }
    }

    &:hover {
        background: rgba(0,0,0,80%);

        & div {
            
            color: #FFFFFF;

            & h3 {
                font-size: 1.4rem !important;
                text-transform: uppercase;
            }

            & ul {
                & li {
                    & a {
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
    
`
