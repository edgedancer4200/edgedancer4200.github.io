import styled from 'styled-components'
import Device from '../../devices-bpks'

export const Section = styled.section`
    padding: 4em;
    display: flex;
    min-height: 300px; /* importante para intersection observer */
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        margin-left: 30%;
        font-size: 4rem;
    }

    @media ${Device.mobileL}{
        margin-left: 0;
    }

    @media ${Device.tablet}{
        margin-left: 0;
    }
`
