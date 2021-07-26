import styled from 'styled-components'
import Device from '../../devices-bpks'

const bg = '#21212C'
const text = '#BAC4B8'

export const Section = styled.section`
    padding: 2em;
    margin-bottom: 6em;
    display: flex;
    min-height: 40vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: .7rem;
        font-family: "Poppins";
        text-transform: uppercase;
        
        @media ${Device.mobileL}{
            font-size: .9rem;
        }
    }

    @media ${Device.tablet}{
        padding: 4em;
    }
`

export const Form = styled.form`
    display: block;
    height: auto;
    width: 100%;
    background-color: transparent;
    padding: 3em 0 0 0;

    @media ${Device.tablet}{
        width: 50%;
    }

    @media ${Device.laptop}{
        width: 50%;
    }
`

export const EmailField = styled.input`
    width: 100%;
    border: none;
    outline: none;
    min-height: 8vh;
    line-height: 1.5em;
    padding-right: .6em;
    width: 96%;
    font-family: 'Poppins';
    font-size: .8rem;
    color: ${text};
    font-weight: 600;
    margin: 0 0 1.5em 0;
    background: transparent;
    border-bottom: 1px solid rgba(0,0,0, 5%);

    &::placeholder {
        color: ${bg};
    }

    @media ${Device.mobileL}{
        font-size: 1rem;
    }
`

export const MessageField = styled.textarea`
    resize: vertical;
    min-height: 8vh;
    padding-right: .6em;
    line-height: 1.5em;
    width: 96%;
    font-family: 'Poppins';
    font-size: .8rem;
    height: .5em;
    background: transparent;
    color: ${text};
    font-weight: 600;
    overflow-y: hidden;
    border: none;
    outline: none;
    margin: 0 0 1.5em 0;
    border-bottom: 1px solid rgba(0,0,0, 5%);

    &::placeholder {
        color: ${bg};
    }

    @media ${Device.mobileL}{
        font-size: 1rem;
    }
`

export const BtnSubmit = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    background-color: ${bg};
    font-family: 'Poppins';
    color: ${text};
    cursor: pointer;
    border-radius: 2px;
    padding: .8em 1em;
    font-size: .8rem;
    border: none;
    outline: none;
    width: 100%;

    @media ${Device.mobileL}{
        font-size: 1rem;
    }
`
