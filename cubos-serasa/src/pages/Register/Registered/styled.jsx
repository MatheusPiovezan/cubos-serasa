import styled from 'styled-components';
import Circle from '../../../assets/circle.svg';

export const Container = styled.div`
    min-height: 100vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--grey_eight);
    position: absolute;
    right: 0;

    .card_checked{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 580px;
        height: 370px;
        background: var(--grey_seven);
        border-radius: 30px;
        margin-bottom: 25px;

        .image_checked{
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${Circle});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 24px;
            height: 104px;
            width: 104px;
        }

        h1{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 130%;
            color: var(--grey_one);
        }
    }

    .nav{
        height: 6px;
        width: 262px;
        gap: 8px;
        display: flex;

            div{
                height: 100%;
                width: 82px;
                border-radius: 20px;
                background: var(--grey_six);
            }

            .nav_theer{
                background: var(--green);
            }
    }

    @media(max-width: 1000px){
        min-height: calc(100vh - 30%);
        width: 100vw;
    }
`;