import * as I from './styled';
import useUser from '../../../../hooks/useUser';

export default function InputsLogin() {
    const { formRegister, setFormRegister } = useUser();
    const handleChangerForm = (event) => {
        setFormRegister({ ...formRegister, [event.target.name]: event.target.value });
    }
    return (
        <I.Container>
            <label>
                <p>Nome*</p>
                <input
                    type='text'
                    placeholder='Digite seu nome'
                    value={formRegister.user_name}
                    name='user_name'
                    onChange={handleChangerForm} />
            </label>
            <label>
                <p>E-mail*</p>
                <div>
                    <input
                        type='email'
                        placeholder='Digite sua e-mail'
                        value={formRegister.user_email}
                        name='user_email'
                        onChange={handleChangerForm} />
                </div>
            </label>
        </I.Container>
    );
}