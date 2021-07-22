import styled from 'styled-components'
import Device from '../../devices-bpks'

const bg = '#F1F1F1'
const text = '#333333'

export const Divisor = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em 0 2em 0;
    margin: 0;
    color: ${bg};

    & a {
        position: absolute;
        bottom: 0;
        right: 0;
        text-decoration: None;
        color: ${text};
        font-size: 1.7rem;
        margin: 0 3em .5em 0;
        font-family: 'Poppins';

        @media ${Device.mobileL} {
            font-size: 1.3rem;
        }
    }
`

export const Info = styled.p`
    color: ${text};
    font-size: .7rem;

    @media ${Device.mobileS} {
        font-size: .8rem;
    }

    @media ${Device.mobileM} {
        font-size: .9rem;
    }

    @media ${Device.tablet}{
        font-size: 1rem;
    }
`
