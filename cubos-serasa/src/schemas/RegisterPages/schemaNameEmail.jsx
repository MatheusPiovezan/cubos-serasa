import * as yup from 'yup';
import { toast } from 'react-toastify';
import error from '../../messages/error';

const schemaNameEmail = yup.object().shape({
    user_name: yup.string()
        .required(() => toast.error(error.nameDontExists)),
    user_email: yup.string()
        .email(() => toast.error(error.invalidFormatEmail))
        .required(() => toast.error(error.emailDontExists))
});

export default schemaNameEmail;