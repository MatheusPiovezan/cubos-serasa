import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../../../hooks/useUser';
import success from '../../../../messages/success';
import erro from '../../../../messages/error';
import schemaPasswords from '../../../../schemas/RegisterPages/schemaPasswords';
import api from '../../../../services/api';

export default function ContainedButtons() {
    const { handleNext, formRegister } = useUser();
    const { user_password, confPassword } = formRegister;
    const navigate = useNavigate();
    const handleSubmit = async () => {
        await schemaPasswords.validate({ user_password, confPassword });
        if (user_password !== confPassword) return toast.error(erro.passwordsAreNotTheSame);
        try {
            await api.post(`/user`, { ...formRegister });
            toast.success(success.userCreated);
            handleNext();
            navigate(`/registered`);
            return
        } catch (error) {
            return toast.error(erro.emailAlreadyExists);
        }
    }

    return (
        <Stack
            direction="row"
            spacing={2}>
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    padding: '4px 55px',
                    borderRadius: '10px',
                    color: 'var(--grey_eight)',
                    background: 'var(--pink)',
                    margin: '26px 0 15px 0',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '1.8rem',
                    lineHeight: '2.5rem',
                    ":hover": {
                        background: 'var(--pink)'
                    }
                }}>
                Entrar</Button>
        </Stack>
    );
}