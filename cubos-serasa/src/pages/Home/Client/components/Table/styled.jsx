import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--white);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(172, 217, 197, 0.25);

        .titles{
            display: flex;
            align-items: center;
            justify-content: center;  
            width: 88%;
            padding: 20px 0 20px 0px;

            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 50px;
            color: var(--grey_two);

            div{ 
                cursor: pointer;
                width: 16%;
                display: flex;
                align-items: center; 
                gap: 10px;
                margin-right: 20px;
            }

            h2{
                width: 18%; 
            }
        }

        .clients{
            display: flex;
            align-items: center;
            justify-content: center;  
            width: 88%;
            padding: 20px 0 20px 0;
            border-top: 1px solid #EFF0F6;
            white-space: nowrap;
             
                h2{
                    width: 20%;
                    color: var(--grey_three);
                    font-family: 'Nunito';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 4.0rem;
                }

                .name{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    cursor: pointer;
                }

                .email{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 5px;
                }

                .defaulter{
                    h2{
                        background: #FFEFEF;
                        color: #971D1D;
                        font-weight: 400;
                        font-size: 1.4rem;
                        line-height: 4.0rem;
                        width: 98px;
                        height: 30px;
                        padding: 0 8px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                    }
                }
                .in-day{
                    h2{
                        background: #EEF6F6;
                        color: #1FA7AF;
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 4.0rem;
                        width: 98px;
                        height: 30px;
                        padding: 0 8px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .in-day{
                    h2{
                        background: #EEF6F6;
                        color: #1FA7AF;
                        font-weight: 400;
                        font-size: 1.6rem;
                        line-height: 4.0rem;
                        width: 98px;
                        height: 30px;
                        padding: 0 8px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                div{
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;

                    .icon{
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                            h2{
                                width: 40px;
                                font-weight: 600;
                                font-size: 1.0rem;
                                line-height: 1.1rem;
                                color: var(--pink);
                            }

                            :hover{
                                transform: scale(1.1);
                            }
                     }
                }
        }

        @media(max-height: 100vh){
            overflow-y: scroll;
            max-height: 750px;
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