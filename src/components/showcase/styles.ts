import styled from 'styled-components';
import Device from '../../devices-bpks';

const link = '#131313';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
        width: 80%;
        font-size: 1rem;
        color: #333333;
        padding: 1em;

        :first-child {
            margin-top: 3em;
        }

        & a {
            text-decoration: None;
            color: ${link};
            font-weight: 800;
            margin-left: .3rem;
        }

        @media ${ Device.tablet } {
            width: 60% !important;
            padding: 2em !important;
            font-size: 1.6rem !important;
        }
        
    }

    @media ${ Device.tablet } {
        flex-direction: row;
    }
`;