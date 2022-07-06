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
    box-shadow: 0px 4px 4px rgba(172, 217, 197, 0.25);

    .title-charge-client{
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

    .table-title{
        width: 100%;
        display: flex;
        align-items: center; 
        justify-content: flex-start;

        div{
            cursor: pointer;
            width: 16%;
            display: flex;
            align-items: center; 
            gap: 10px;
                h2{
                    width: 100px;
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

    .description-charges{
        display: flex;
        align-items: center;
        justify-content: flex-start;  
        width: 100%;
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
            .date{
                width: 13.5%;
                margin-right: 25px;
            }
            .value{
                width: 14.5%;
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
                width: 35%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                white-space: nowrap;
                text-align: center;
                gap: 24px;

                h2{
                    width: 100%;
                    text-align: justify;    
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .icons{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;

                        div{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;

                            h2{
                                width: 35px;
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
        max-height: 50vh;
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
                height: 7px;
            }
    }   
`;