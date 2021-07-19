import styled from 'styled-components';

const bg = '#F1F1F1';
const text = '#131313';

export const Section = styled.section`
    padding: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: .9rem;
        font-family: "Poppins";
        text-transform: uppercase;
    }
`;

export const Form = styled.form`
    display: block;
    min-width: 500px;
    height: auto;
    background-color: #F7F7F7;
    padding: 3em;
`;

export const EmailField = styled.input`
    width: 100%;
    border: none;
    outline: none;
    width: 100%;
    font-family: 'Poppins';
    font-size: 1rem;
    color: #121212;
    font-weight: 600;
    margin: 0 0 1.5em 0;
    padding: .2em .6em 1em;
    background: transparent;
    border-bottom: 1px solid rgba(0,0,0, 5%);

    &::placeholder {
        color: ${text};
    }
`;

export const MessageField = styled.textarea`
    resize: vertical;
    min-height: 8vh;
    padding: .2em .6em;
    width: 100%;
    font-family: 'Poppins';
    font-size: 1rem;
    height: .5em;
    background: transparent;
    color: #121212;
    font-weight: 600;
    overflow-y: hidden;
    border: none;
    outline: none;
    margin: 0 0 1.5em 0;
    border-bottom: 1px solid rgba(0,0,0, 5%);
`;

export const BtnSubmit = styled.button`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    background-color: ${text};
    color: ${bg};
    cursor: pointer;
    border-radius: 2px;
    padding: .8em 1em;
    font-size: .8rem;
    border: none;
    outline: none;
    margin: 0 0 0 1em;
`;