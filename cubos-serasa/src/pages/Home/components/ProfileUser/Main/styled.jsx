import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    bottom: 24px;
    right: 100px;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            cursor: pointer;

                .profile{
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--grey_six);
                    gap: 1px;
                    
                        span {
                            color: var(--green);
                        }
                }

                .profile_modal{
                    position: relative;
                    color: var(--green);
                }
        }
`;