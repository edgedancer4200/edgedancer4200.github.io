import styled from 'styled-components';

const link = '#131313';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    & p {
        margin-right: 2em;
        width: 60%;
        font-size: 1.6rem;
        color: #333333;

        & a {
            text-decoration: None;
            color: ${link};
            font-weight: 800;
            margin-left: .3rem;
        }
    }
`;