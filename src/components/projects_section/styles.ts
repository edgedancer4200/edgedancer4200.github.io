import styled from 'styled-components';
import Device from '../../devices-bpks';

export const Section = styled.section`
    padding: 2em;

    & h3 {
        font-size: .7rem;
        font-family: "Poppins";
        text-transform: uppercase;
        padding-bottom: 3em;

        @media ${ Device.mobileL }{
            font-size: .9rem;
        }
    }

    @media ${ Device.tablet }{
        padding: 4em;
    }

`;