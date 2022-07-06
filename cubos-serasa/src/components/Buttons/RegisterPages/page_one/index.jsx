import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../../../hooks/useUser';
import success from '../../../../messages/success';
import error from '../../../../messages/error';
import schemaNameEmail from '../../../../schemas/RegisterPages/schemaNameEmail';
import api from '../../../../services/api';

export default function ContainedButtons() {
    const { handleNext, formRegister } = useUser();
    const user_email = formRegister.user_email;
    const navigate = useNavigate();
    const handleSubmit = async () => {
        await schemaNameEmail.validate(formRegister);
        if (!(formRegister.user_name).trim()) return toast.error(error.nameDontExists);
        const response = await api.get('/email-verification', { user_email });
        console.log(response);
        toast.success(success.nameEmailOkay);
        handleNext();
        navigate(`/sing-up-password`);
    }

    return (
        <Stack
            direction="row"
            spacing={2}>
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    padding: '4px 40px',
                    borderRadius: '10px',
                    color: 'var(--grey_eight)',
                    background: 'var(--pink)',
                    margin: '26px 0 19px 0',
                    fontFamily: 'Nunito',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                    ":hover": {
                        background: 'var(--pink)'
                    }
                }}>
                Continuar</Button>
        </Stack>
    );
}
