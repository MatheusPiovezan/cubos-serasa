import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import LogoFilm from '../../assets/logo-film.svg';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

        .background{
            height: 100vh;
            width: 30%;
            background-image: url(${LogoFilm}), url(${BackgroundLogin});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            display: flex;
            justify-content: center;

                div{
                    height: 93px;
                    width: 39.5rem;
                    position: absolute;
                    top: 10.0rem;
                    h1{
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 2.4rem;
                        line-height: 130%;
                        color: var(--green_dark);
                        text-align: center;
                    }
                }
        }

        .login{
            height: 100vh;
            width: calc(100vw - 30%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--grey_eight);

                h2{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2.4rem;
                    line-height: 130%;
                    margin-bottom: 3.2rem;
                    color: var(--grey_one);
                }

                p{
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 130%;

                    .link{
                        font-weight: 600;
                        color: var(--pink);
                    }
                }
        }

        @media(max-width: 1430px){
            .background{
                div{
                    width: 22.5rem;
                }
            }
        }

        @media(max-width: 1050px){
            flex-direction: column; 
            background-image: url(${LogoFilm}), url(${BackgroundLogin});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            .login{
                width: 100vw;
            }

            .background{
                background: none;
                height: 0;
                width: 0;
                    div{
                        width: 39.5rem;
                        top: 50px;
                    }
            }
        }

        @media(max-width: 450px){
            justify-content: center;
            overview-x: hidden;
            width: 0;
            .background{
                    div{
                        top: 30px;
                    }
            }
        }
`;