import * as yup from 'yup';
import error from '../../messages/error';
import { toast } from 'react-toastify';

const schemaBilling = yup.object().shape({
    description: yup.string()
        .trim(() => toast.error(error.descriptionDontExists))
        .required(() => toast.error(error.descriptionDontExists)),
    value: yup.string()
        .trim(() => toast.error(error.valueDontExists))
        .required(() => toast.error(error.valueDontExists))
});

export default schemaBilling;