import * as I from './styled';
import ClosedEye from '../../../../assets/closed-eye.svg';
import OpenEye from '../../../../assets/uncovered-eye.svg';
import { useState } from 'react';
import useUser from '../../../../hooks/useUser';

export default function InputsLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const { formRegister, setFormRegister } = useUser();
    const handleChangerForm = (event) => {
        setFormRegister({ ...formRegister, [event.target.name]: event.target.value });
    }
    return (
        <I.Container>
            <label>
                <p>Senha*</p>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Digite sua senha'
                        value={formRegister.user_password}
                        name='user_password'
                        onChange={handleChangerForm} />
                    <img
                        src={showPassword ? OpenEye : ClosedEye}
                        alt='olho'
                        onClick={() => setShowPassword(!showPassword)} />
                </div>
            </label>
            <label>
                <p>Repita a senha*</p>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Repita sua senha'
                        value={formRegister.confPassword}
                        name='confPassword'
                        onChange={handleChangerForm} />
                    <img
                        src={showPassword ? OpenEye : ClosedEye}
                        alt='olho'
                        onClick={() => setShowPassword(!showPassword)} />
                </div>
            </label>
        </I.Container>
    );
}