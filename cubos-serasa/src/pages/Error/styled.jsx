import styled from 'styled-components';

export const Container = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top 0;
    right: 0;
    left: 0;
    bottom: 0;
    
        div{
            width: 40%;
            height: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--grey_eight);
            gap: 20px;
            border-radius: 30px;

                img{
                    border-radius: 20px;
                }

                h1{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2.4rem;
                    line-height: 130%;
                }

                p{
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 1.8rem;
                    line-height: 130%;
                }
        }
`;