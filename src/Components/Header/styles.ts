import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: #FFF;
    border-bottom: 1px solid #3333;
`;
export const ContentHeaderArea = styled.div`
    max-width: 1000px;
    margin: auto;
    display: flex;
`;
export const ContentLogoArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    a {
        > span {
            font-size: 27px; font-weight: bold;

            &:nth-child(1) { color: #FF0000;}
            &:nth-child(2) { color: #00FF00;}
            &:nth-child(3) { color: #0000FF;}
        }
    }
`;

export const NavContentArea = styled.nav`

    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        height: 40px;
        gap: 20px;

        > li {

            > a {
                color: #333;
                font-size: 1em;
                &:hover {
                    color: #8888;
                }
            }

            &:nth-child(3) {
                a {
                   background: rgb(255, 129, 0);
                   border-radius: 4px;
                   color: #FFF;
                   padding: 5px 10px;

                   transition: all .5s ease;

                   &:hover {
                    background: rgba(255, 129, 0, .9);
                   }
                }
            }
        }
    }
`;