import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: calc(100vw - 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    background: var(--grey_eight);

        .title-client{
            color: var(--green);
            border-bottom: 1px solid var(--green_light);
            width: 95%;
            padding: 0 0 4px 71px;
            margin-top: 5.5rem;
            position: relative;

            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 25px;

            h1{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 24px;
                color: var(--green);
            }

            .title-client-user{ 
                display: flex;
                align-items: center;
                gap: 15px;

                    h2{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 24px;
                        color: var(--grey_three);
                    }
            }
        }

        .elements{
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px 0 45px 0;

                .elements_header{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 25px;

                    .header_one{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 16px;

                            h2{
                                font-family: 'Montserrat';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 2.6rem;
                                line-height: 130%;
                                color: var(--gray_two);
                            }
                    }

                    .header_two{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 16px;

                            div{
                                position: relative;

                                input{
                                    all: unset;
                                    width: 322px;
                                    height: 25px;   
                                    padding: 7px 8px;
                                    border-radius: 10px;
                                    background: var(--white);
                                    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.1);
                                    font-size: 1.8rem;
                                    line-height: 25px;
                                    color: var(--grey_three);

                                    ::placeholder{
                                        font-family: 'Nunito';
                                        font-style: normal;
                                        font-weight: 400;
                                        font-size: 1.8rem;
                                        line-height: 25px;
                                        color: var(--grey_three);
                                    }
                                }

                                .img{
                                    position:absolute;
                                    top: 13px;
                                    right: 13px;
                                    bottom: 13px;
                                    cursor: pointer;
                                }
                            }
                    }
                }
        }
`;