import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageEditUserClient from '../../../assets/edit-user-client.svg';
import useUser from '../../../hooks/useUser';

export default function ContainedButtons() {
    const { setOpenEditClient } = useUser();
    return (
        <Stack
            direction="row"
            spacing={2}>
            <Button
                onClick={() => setOpenEditClient(true)}
                variant="contained"
                sx={{
                    padding: '4px 70px',
                    border: '1px solid #dedee9',
                    borderRadius: '10px',
                    color: 'var(--green)',
                    background: 'var(--grey_eight)',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    lineHeight: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    ":hover": {
                        background: 'var(--grey_eight)'
                    }
                }}>
                <img src={ImageEditUserClient} alt='editar cliente' />
                Editar cliente</Button>
        </Stack>
    );
};