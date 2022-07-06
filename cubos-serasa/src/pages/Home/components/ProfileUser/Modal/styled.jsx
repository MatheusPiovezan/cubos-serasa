import styled from 'styled-components';

export const Triangle = styled.div`
    position: absolute;
    top: 41px;
    left: 164px;
    z-index: 2;
`;

export const Container = styled.div`
    z-index: 1;
    width: 92px;
    height: 51px;
    background: var(--white);
    border-radius: 8px;
    position: absolute;
    top: 48px;
    left: 150px;
    box-shadow: 0 0 15px 5px var(--grey_six);

        div{
            display: flex;
            flex-direction: column;
            align-items: center:
            justify-content: center;
            gap: 4px;

                img{
                    width: 15px;
                }

                span{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 1.0rem;
                    line-height: 1.1rem;
                    color: var(--grey_three);
                }
        }
`;