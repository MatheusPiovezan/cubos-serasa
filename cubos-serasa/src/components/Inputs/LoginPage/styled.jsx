import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .link-login{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 130%;
        color: var(--pink);
    }

    label{
        p{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 1.4rem;
            line-height: 20px;
            color: var(--gray_seven_hundred);
            margin-bottom: 6px;
        }

        input{
            all: unset;
            width: 344px;
            height: 44px;
            font-size: 1.6rem;
            border: 1px solid #D0D5DD;
            border-radius: 8px;
            margin-bottom: 20px;
            padding-left: 14px;
            box-shadow: 0 1px 2px rgba(16, 24, 40, 0.1);

            :focus{
                border 1px solid var(--pink);
                box-shadow: 0 1px 2px var(--pink);
            }

            ::placeholder{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 24px;
                color: var(--gray_five_hundred);
            }
        }

        div{
            width: 360px;
            height: 40px;
            position: relative;

                img{
                    position: absolute;
                    top: 15px;
                    right: 13px;
                }
        }
    }
`;