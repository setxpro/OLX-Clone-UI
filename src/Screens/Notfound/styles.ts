import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    a {
        color: #001842;
        font-size: 1.5rem;
        font-weight: bold;
        position: absolute;
        right: 50%;
        top: 50px;

    }
`;
export const Content = styled.div`
    width: 900px;
    height: 500px;
    margin: auto;
    background-image: url('https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif');
    background-repeat: no-repeat;

`;
