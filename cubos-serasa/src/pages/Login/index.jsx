import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLogin from '../../components/Buttons/LoginPage';
import InputLogin from '../../components/Inputs/LoginPage';
import * as L from './styled';

const defalultValueForm = { user_email: ``, user_password: `` };

export default function Login() {
    const [form, setForm] = useState(defalultValueForm);
    return (
        <L.Container>
            <div className='background'>
                <div>
                    <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
                </div>
            </div>
            <div className='login'>
                <h2>Faça seu login!</h2>
                <InputLogin form={form} setForm={setForm} />
                <ButtonLogin form={form} />
                <p>Ainda não possui uma conta?
                    <Link
                        to={`/sing-up-name-email`}
                        className='link'>
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </L.Container>
    );
}