import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 4px 4px rgba(172, 217, 197, 0.25);

        .titles{
            display: flex;
            align-items: center;
            justify-content: flex-start;  
            width: 88%;
            padding: 20px 0 20px 0px;

            div{
                width: 16%;
                display: flex;
                align-items: center; 
                gap: 10px;

                    h2{
                        width: 100px;
                    }
                    img, h2{
                        cursor: pointer;
                    }
            }

            h2{
                text-align: justify;
                width: 14%; 
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-size: 1.6rem;
                line-height: 50px;
                color: var(--grey_two);
            }
        }

        .clients{
            display: flex;
            align-items: center;
            justify-content: flex-start;  
            width: 88%;
            padding: 20px 0 20px 10px;
            border-top: 1px solid #EFF0F6;
             
                h2{
                    width: 15.5%;
                    color: var(--grey_three);
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 4.0rem;
                }

                .value{
                    width: 14.5%;
                }

                .date{
                    width: 14%;
                }

                .status-pending{
                    width: 14.5%;
                        h2{
                            background: #FCF6DC;
                            color: var(--yellom-dark);
                            font-weight: 600;
                            font-size: 1.4rem;
                            line-height: 4.0rem;
                            width: 78px;
                            height: 20px;
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                }
                .status-paid-out{
                    width: 14.5%;
                        h2{
                            background: #EEF6F6;
                            color: #1FA7AF;
                            font-weight: 600;
                            font-size: 1.4rem;
                            line-height: 4.0rem;
                            width: 78px;
                            height: 20px;
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                }

                .status-unsuccessful {
                    width: 14.5%;
                    h2{
                        background: #FFEFEF;
                        color: #971D1D;
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 4.0rem;
                        width: 78px;
                        height: 20px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .description{
                    width: 25%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    white-space: nowrap;
                    text-align: center;

                    h2{
                        text-align: justify;
                        width: 60%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .icons{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;

                            div{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;
                                
                                h2{
                                    width: 32px;
                                    font-weight: 600;
                                    font-size: 1.0rem;
                                    line-height: 1.1rem;
                                    color: var(--pink);
                                }
                                
                                .edit{
                                    color: var(--grey_three);
                                    width: 30px;
                                }

                                :hover{
                                    transform: scale(1.1);
                                }
                            }
                    }
                }
        }

        @media(max-height: 100vh){
            overflow-y: scroll;
            max-height: 75vh;
            justify-content: flex-start;

             ::-webkit-scrollbar{
                width: 7px;   
                border: 5px solid var (--grey_eight);
             }

             ::-webkit-scrollbar-thumb{
                background: var(--pink); 
                border-radius: 30px;
             }

             ::-webkit-scrollbar-button {
                height: 5px;
            }
        }
`;