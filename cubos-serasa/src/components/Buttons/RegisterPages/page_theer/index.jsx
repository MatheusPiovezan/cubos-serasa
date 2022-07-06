import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../../hooks/useUser';

export default function ContainedButtons() {
    const { handleReset, handleClearForm } = useUser();
    const navigate = useNavigate();
    const handleSubmit = async () => {
        handleClearForm();
        handleReset();
        navigate(`/`);
        return;
    }

    return (
        <Stack
            direction="row"
            spacing={2}>
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    padding: '4px 30px',
                    borderRadius: '10px',
                    color: 'var(--grey_eight)',
                    background: 'var(--pink)',
                    marginBottom: '69px',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    lineHeight: '2.5rem',
                    ":hover": {
                        background: 'var(--pink)'
                    }
                }}>
                Ir para login</Button>
        </Stack>
    );
}