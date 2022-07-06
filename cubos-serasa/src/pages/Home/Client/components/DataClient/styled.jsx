import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0px 4px 4px rgba(172, 217, 197, 0.25);

        .title-user-data{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between; 
            margin-bottom: 18px;
            
                h3{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 130%;
                    color: var(--gray_two);
                }
        }

        .element-one{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 110px;
            margin-bottom: 55px;

            div{
                gap: 8px;

                    h4{
                        font-family: 'Nunito';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.6rem;
                        line-height: 24px;
                        color: var(--gray_two);
                    }

                    p{
                        font-family: 'Nunito';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 24px;
                        color: var(--gray_two);
                    }
            }
        }

        .element-two{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 170px;

            div{
                gap: 8px;

                    h4{
                        font-family: 'Nunito';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.6rem;
                        line-height: 24px;
                        color: var(--gray_two);
                    }

                    p{
                        font-family: 'Nunito';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 24px;
                        color: var(--gray_two);
                    }
            }
        }
`;