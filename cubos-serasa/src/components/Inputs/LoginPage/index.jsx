import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClosedEye from '../../../assets/closed-eye.svg';
import OpenEye from '../../../assets/uncovered-eye.svg';
import * as I from './styled';

export default function InputsLogin({ form, setForm }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleChangerForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    return (
        <I.Container>
            <label>
                <p>E-mail</p>
                <input
                    type='text'
                    placeholder='Digite seu e-mail'
                    value={form.user_email}
                    name='user_email'
                    onChange={handleChangerForm} />
            </label>
            <Link to='#' className='link-login'>Esqueceu a senha?</Link>
            <label>
                <p>Senha</p>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Digite sua senha'
                        value={form.user_password}
                        name='user_password'
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