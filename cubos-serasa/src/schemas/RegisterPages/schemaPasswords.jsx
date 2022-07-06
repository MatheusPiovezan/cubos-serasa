import * as yup from 'yup'
import error from '../../messages/error';
import { toast } from 'react-toastify';

const schemaPasswords = yup.object().shape({
    user_password: yup.string()
        .trim()
        .min(6, () => toast.error(error.passwordFewCharacters))
        .required(() => toast.error(error.passwordDontExists)),
    confPassword: yup.string()
        .trim()
        .required(() => toast.error(error.confirmPasswordDontExists))
});

export default schemaPasswords;