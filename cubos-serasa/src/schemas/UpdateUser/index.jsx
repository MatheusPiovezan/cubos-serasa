import * as yup from 'yup';
import erro from '../../messages/error';
import { toast } from 'react-toastify';

const schemaUpdateUser = yup.object().shape({
    user_name: yup.string()
        .trim()
        .required(() => toast.error(erro.nameDontExists)),
    user_email: yup.string()
        .email(() => toast.error(erro.invalidFormatEmail))
        .required(() => toast.error(erro.emailDontExists)),
    user_password: yup.string()
        .trim()
        .min(6, () => toast.error(erro.passwordFewCharacters))
        .required(() => toast.error(erro.passwordDontExists)),
    confPassword: yup.string()
        .trim()
        .required(() => toast.error(erro.confirmPasswordDontExists))
});

export default schemaUpdateUser;