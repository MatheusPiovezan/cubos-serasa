import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import * as P from './styled';

const steps = [
    {
        label: 'Cadastre-se',
        description: `Por favor, escreva seu nome e e-mail.`,
    },
    {
        label: 'Escolha uma senha',
        description:
            'Escolha uma senha segura.',
    },
    {
        label: 'Cadastro realizado com sucesso',
        description: `E-mail e senha cadastrados com sucesso.`,
    },
];

function Progress() {
    const { activeStep } = useUser();

    return (
        <>
            <P.Container>
                <Box
                    sx={{
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '@media (max-width: 1000px)': {
                            alignItems: 'start',
                            marginTop: '20px',
                            paddingBottom: '0'
                        }
                    }}>
                    <Stepper
                        activeStep={activeStep}
                        orientation="vertical">
                        {steps.map((step, index) => (
                            <Step
                                key={step.label}>
                                <StepLabel
                                    sx={{
                                        color: 'green',
                                        fontSize: '2.0rem'
                                    }}>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Nunito',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '18px',
                                            lineHeight: '130%',
                                            color: 'var(--grey_two)'
                                        }}
                                    >{step.description}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Outlet />
            </P.Container>
        </>
    );
}

export default Progress;