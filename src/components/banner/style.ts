import styled from 'styled-components'
import Device from '../../devices-bpks'

export const Section = styled.section`
    width: 100%;
    min-height: 300px; /* importante para intersection observer */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        margin-left: 0%;
        font-size: 2.5rem;
        padding: 4em 1em 0em 1em;
    }

    @media ${Device.mobileL}{
        margin-left: 0;

        & h3 {
            margin-left: 30%;
            font-size: 3rem;
        }
    }

    @media ${Device.tablet}{
        margin-left: 0;

        & h3 {
            margin-left: 30%;
            font-size: 4rem;
        }
    }
`
