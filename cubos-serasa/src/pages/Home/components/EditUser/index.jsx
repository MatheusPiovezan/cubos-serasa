import { useState } from 'react';
import { toast } from 'react-toastify';
import IconClose from '../../../../assets/close.svg';
import CloseEye from '../../../../assets/closed-eye.svg';
import OpenEye from '../../../../assets/uncovered-eye.svg';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import erro from '../../../../messages/error';
import schemaUpdateUser from '../../../../schemas/UpdateUser';
import { getItem, removeItem, setItem } from '../../../../utils/storage';
import './styles.css';
import InputMask from 'react-input-mask';

export default function EditUser() {
    const [showPassword, setShowPassword] = useState(false);
    const { setOpenEditUser } = useUser();
    const { UpdateUser } = useRequest();
    const [form, setForm] = useState({
        user_name: getItem(`userName`), user_email: getItem(`userEmail`), user_password: ``,
        confPassword: ``, user_CPF: getItem(`userCpf`), user_phone_number: getItem(`userPhoneNumber`)
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await schemaUpdateUser.validate(form);
        if (form.user_password !== form.confPassword) return toast.error(erro.passwordsAreNotTheSame);

        removeItem(`userName`);
        removeItem(`userEmail`);
        removeItem(`userCpf`);
        removeItem(`userPhoneNumber`);
        setItem(`userName`, form.user_name);
        setItem(`userEmail`, form.user_email);
        setItem(`userCpf`, form.user_CPF);
        setItem(`userPhoneNumber`, form.user_phone_number);
        form.user_CPF = form.user_CPF.replace(/[^0-9]/g, '');
        form.user_phone_number = form.user_phone_number.replace(/[^0-9]/g, '');
        await UpdateUser(form);
    }

    const handleChangerForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <div className='container-modal-edit-background'>
            <div className='container-modal-edit'>
                <div className='modal-edit-tile-iconclose'>
                    <h1>Edite seu cadastro</h1>
                    <img
                        src={IconClose}
                        alt='fechar'
                        onClick={() => setOpenEditUser(false)}
                    />
                </div>
                <div>
                    <form
                        className='modal-form-edit'
                        onSubmit={handleSubmit}
                    >
                        <label>Nome*</label>
                        <input
                            type='text'
                            placeholder='Digite seu nome'
                            name='user_name'
                            value={form.user_name}
                            onChange={handleChangerForm}
                        />
                        <label>E-mail*</label>
                        <input
                            type='text'
                            placeholder='Digite seu e-mail'
                            name='user_email'
                            value={form.user_email}
                            onChange={handleChangerForm}
                        />
                        <div className='modal-edit-cpf-tel'>
                            <div>
                                <label>CPF</label>
                                <InputMask
                                    mask='999.999.999-99'
                                    type='text'
                                    placeholder='Digite seu CPF'
                                    name='user_CPF'
                                    value={form.user_CPF}
                                    onChange={handleChangerForm}
                                />
                            </div>
                            <div>
                                <label>Telefone</label>
                                <InputMask
                                    mask='(99) 99999-9999'
                                    type='text'
                                    placeholder='Digite seu Telefone'
                                    name='user_phone_number'
                                    value={form.user_phone_number}
                                    onChange={handleChangerForm}
                                />
                            </div>
                        </div>
                        <div className='modal-edit-password'>
                            <label>Nova Senha*</label>
                            <div className='input-password'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={showPassword ? 'Sua senha' : '••••••••'}
                                    name='user_password'
                                    value={form.user_password}
                                    onChange={handleChangerForm}
                                />
                                <img
                                    src={showPassword ? OpenEye : CloseEye}
                                    alt='olho'
                                    className='eyes'
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                            <label>Confirmar Senha*</label>
                            <div className='input-password'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={showPassword ? 'Repita sua senha' : '••••••••'}
                                    name='confPassword'
                                    value={form.confPassword}
                                    onChange={handleChangerForm}
                                />
                                <img
                                    src={showPassword ? OpenEye : CloseEye}
                                    alt='olho'
                                    className='eyes'
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                        <div className='modal-form-edit-btn'>
                            <button>Aplicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}