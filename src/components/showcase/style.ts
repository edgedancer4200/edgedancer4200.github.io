import styled from 'styled-components'
import Device from '../../devices-bpks'

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
        font-size: 2rem;
        padding: 1em;
        line-height: 1.1;
    }

    @media ${Device.mobileL} {
        & h1 {
            width: 60%;
            padding: 1em;
            font-size: 6rem;
            line-height: 0.9;
        }
    }

    @media ${Device.tablet} {
        & h1 {
            width: 60%;
            padding: 1em;
            font-size: 6rem;
            line-height: 0.9;
        }
    }
     
`
