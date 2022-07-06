import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    width: 88%;
    height: 70vh;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position relative;
            height: 350px;

                .peaple{
                    position: absolute;
                    top: 0;
                    right: 56px;
                }
        }

        h2{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 2.8rem;
            line-height: 34px;
            color: rgba(240, 136, 137, 1);
        }

        h3{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 29px;
            color: rgba(155, 155, 178, 1);
        }
`;