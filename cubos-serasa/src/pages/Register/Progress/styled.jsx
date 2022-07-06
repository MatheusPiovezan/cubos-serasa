import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--grey_seven);

    .MuiStepper-root .MuiStepper-vertical .css-9tmuzo-MuiStepper-root {
        background-color: green;
      }

      .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active, 
      .css-4ff9q7.Mui-active,
      .css-4ff9q7.Mui-completed,
      .css-farnub.Mui-completed,
      .css-farnub.Mui-active,
      .css-8t49rw-MuiStepConnector-line{
        color: var(--green);
      }

      .css-vgb7rt{
        border-color: green;
      }

      .css-farnub,
      .css-farnub.Mui-completed,
      .css-farnub.Mui-active{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
      }

      .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active,
      .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed,
      .css-4ff9q7{
        height: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        .css-10psl7k{
          fill: var(--white);
          font-size: 1.2rem;
          font-family: 'Montserrat';
        }
      }

      .css-d0mviz{
        margin-left: 12px;
        padding-left: 20px;
        padding-right: 8px;
        border-left: 1px solid green;
      }

      @media(max-width: 1050px){
        height: 0;
        width: 0%;
        justify-content: center;
      }
`;