import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(145, 154, 150, 0.1);
    backdrop-filter: blur(4px);

        .del-card{
            width: 45%;
            height: 52%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--white);
            border-radius: 30px;
            position: relative;

                .close{
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    cursor: pointer;
                }

                img{
                    margin-bottom: 13px;
                }

                h3{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 1.8rem;
                    line-height: 130%;
                    color: var(--yellom-dark);
                    margin-bottom: 26px;
                }

                .buttons{
                    width: 216px;
                    display: flex;
                    justify-content: space-between;
                        button{
                            all: unset;
                            text-align: center;
                            width: 100px;
                            height: 25px;
                            font-family: 'Nunito';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 1.8rem;
                            line-height: 25px;
                            color: #AE1100;
                            background: #F2D6D0;
                            border-radius: 4px;
                            cursor: pointer;

                                :hover{
                                    transform: scale(1.1);
                                }
                        }

                        .yes{
                            background: #ACD9C5;
                            color: var(---gren-dark);
                        }
                }
        }
`;