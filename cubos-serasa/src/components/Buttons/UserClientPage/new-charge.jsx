import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageSum from '../../../assets/sum.svg';
import useUser from '../../../hooks/useUser';


export default function ContainedButtons() {
    const { setOpenBillingRegister } = useUser();
    return (
        <Stack
            direction="row"
            spacing={2}>
            <Button
                onClick={() => setOpenBillingRegister(true)}
                variant="contained"
                sx={{
                    padding: '4px 70px',
                    gap: '10px',
                    borderRadius: '10px',
                    color: 'var(--white)',
                    background: 'var(--pink)',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    lineHeight: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    ":hover": {
                        background: 'var(--pink)'
                    }
                }}>
                <img src={ImageSum} alt='editar cliente' />
                Nova Cobrança</Button>
        </Stack >
    );
};