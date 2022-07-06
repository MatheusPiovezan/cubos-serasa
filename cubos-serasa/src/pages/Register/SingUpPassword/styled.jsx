import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: calc(100vw - 40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--grey_eight);
    position: absolute;
    right: 0;

        h1{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 130%;
            color: var(--grey_one);
            margin-bottom: 58px;
        }

        p{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 1.8rem;
            line-height: 130%;
            color: var(--grey_two);

                .link{
                    color: var(--pink);
                }
        }
        
        .nav{
            height: 6px;
            width: 262px;
            gap: 8px;
            display: flex;
            position: absolute;
            bottom: 64px;

                div{
                    height: 100%;
                    width: 82px;
                    border-radius: 20px;
                    background: var(--grey_six);
                }

                .nav_two{
                    background: var(--green);
                }
        }

        @media(max-width: 1000px){
            min-height: calc(100vh - 25%);
            width: 100vw;
        }
`;