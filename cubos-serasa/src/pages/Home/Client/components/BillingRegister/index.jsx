import { format } from 'date-fns';
import { useState } from 'react';
import { toast } from 'react-toastify';
import IconClose from '../../../../../assets/close.svg';
import IconDoc from '../../../../../assets/IconDoc.svg';
import useUser from '../../../../../hooks/useUser';
import erro from '../../../../../messages/error';
import schemaBilling from '../../../../../schemas/BillingRegister/schemaBilling';
import './style.css';
import useRequest from '../../../../../hooks/useRequest';

export default function BillingRegister({ getCharge }) {
    const { setOpenBillingRegister } = useUser();
    const { handleBillingRegister } = useRequest();
    const [statusInputRadio, setStatusInputRadio] = useState(true);
    const [form, setForm] = useState({
        client: getCharge.customer_name, description: ``, status: 'Paga', value: ``,
        due_date: new Date().toLocaleDateString('pt-BR', { timeZone: 'UTC' }), customer_cpf: getCharge.customer_cpf
    });

    function handleClickCheckBoxPago() {
        setStatusInputRadio(true);
        setForm({ ...form, status: 'Paga' });
    }

    function handleClickCheckBoxPendente() {
        setStatusInputRadio(false);
        setForm({ ...form, status: 'Pendente' });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await schemaBilling.validate(form);
        if (form.due_date < format(new Date(), 'yyyy-MM-dd')) return toast.error(erro.invalidDate);
        form.value *= 100;
        await handleBillingRegister(form);
    }

    const handleChangerForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <div className='modal-billing-register-background'>
            <div className='container-modal-billing-register'>
                <div className='modal-billing-register-title'>
                    <div>
                        <img src={IconDoc} alt='icone pessoas' />
                        <h1>Cadastro de Cobrança</h1>
                    </div>
                    <div
                        className='modal-billing-register-iconclose'
                        onClick={() => setOpenBillingRegister(false)}
                    >
                        <img
                            src={IconClose}
                            alt='fechar'
                        />
                    </div>
                </div>
                <div>
                    <form
                        className='modal-billing-register-form'
                    >
                        <div className='billing-register-form-one'>
                            <label>Nome*</label>
                            <input
                                type='text'
                                placeholder='Digite seu nome'
                                value={form.client}
                                onChange={handleChangerForm}
                            />
                            <label>Descrição*</label>
                            <textarea
                                className='input-description'
                                cols="40"
                                rows="3"
                                type='text'
                                placeholder='Digite a descrição'
                                name='description'
                                value={form.description}
                                onChange={handleChangerForm}
                            ></textarea>
                        </div>
                        <div className='billing-register-form-two'>
                            <div className='date'>
                                <label>Vencimento*</label>
                                <input
                                    type='date'
                                    placeholder='Data de Vencimento'
                                    name='due_date'
                                    value={form.due_date}
                                    onChange={handleChangerForm}
                                />
                            </div>
                            <div>
                                <label>Valor*</label>
                                <input
                                    type='text'
                                    placeholder='Digite o valor'
                                    name='value'
                                    value={form.value}
                                    onChange={handleChangerForm}
                                />
                            </div>
                        </div>
                        <div className='modal-billing-register-radio'>
                            <label>Status*</label>
                            <label>
                                <div className='custom-checkbox-paga'>
                                    <input
                                        className={statusInputRadio ? 'checked' : 'unchecked'}
                                        type='radio'
                                        name='status'
                                        onClick={handleClickCheckBoxPago}
                                    />
                                    <span>Cobrança Paga</span>
                                </div>
                            </label>
                            <label>
                                <div className='custom-checkbox-pendente'>
                                    <input
                                        className={statusInputRadio ? 'unchecked' : 'checked'}
                                        type='radio'
                                        name='status'
                                        onClick={handleClickCheckBoxPendente}
                                    />
                                    <span>Cobrança Pendente</span>
                                </div>
                            </label>
                        </div>
                        <div className='modal-billing-register-btn'>
                            <div className='modal-billing-register-btn-one'>
                                <button>Cancelar</button>
                            </div>
                            <div className='modal-billing-register-btn-two'>
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                >Aplicar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}