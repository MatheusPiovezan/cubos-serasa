import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Sum from '../../../assets/sum.svg';
import useUser from '../../../hooks/useUser';

export default function ContainedButtons() {
    const { setOpenRegisterClient } = useUser();

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Button
                onClick={() => setOpenRegisterClient(true)}
                variant="contained"
                sx={{
                    padding: '4px 56px',
                    borderRadius: '10px',
                    color: 'var(--grey_eight)',
                    background: 'var(--pink)',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    lineHeight: '2.5rem',
                    ":hover": {
                        background: 'var(--pink)'
                    }
                }}>
                <img
                    src={Sum}
                    alt='suma'
                    style={{ paddingRight: '9px' }} />
                Adicionar clientes</Button>
        </Stack>
    );
}