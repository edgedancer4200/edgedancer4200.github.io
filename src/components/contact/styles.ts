import styled from 'styled-components';
import Device from '../../devices-bpks';

const bg = '#F1F1F1';
const text = '#131313';

export const Section = styled.section`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: .7rem;
        font-family: "Poppins";
        text-transform: uppercase;
        
        @media ${ Device.mobileL }{
            font-size: .9rem;
        }
    }

    @media ${ Device.tablet }{
        padding: 4em;
    }
`;

export const Form = styled.form`
    display: block;
    height: auto;
    width: 100%;
    background-color: #F7F7F7;
    padding: 3em 0 0 0;

    @media ${ Device.tablet }{
        width: 50%;
    }

    @media ${ Device.laptop }{
        width: 50%;
    }
`;

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
    color: #121212;
    font-weight: 600;
    margin: 0 0 1.5em 0;
    background: transparent;
    border-bottom: 1px solid rgba(0,0,0, 5%);

    &::placeholder {
        color: ${text};
    }

    @media ${ Device.mobileL }{
        font-size: 1rem;
    }
`;

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
    color: #121212;
    font-weight: 600;
    overflow-y: hidden;
    border: none;
    outline: none;
    margin: 0 0 1.5em 0;
    border-bottom: 1px solid rgba(0,0,0, 5%);

    @media ${ Device.mobileL }{
        font-size: 1rem;
    }
`;

export const BtnSubmit = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    background-color: ${text};
    font-family: 'Poppins';
    color: ${bg};
    cursor: pointer;
    border-radius: 2px;
    padding: .8em 1em;
    font-size: .8rem;
    border: none;
    outline: none;
    width: 100%;

    @media ${ Device.mobileL }{
        font-size: 1rem;
    }
`;