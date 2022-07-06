
import 'react-toastify/dist/ReactToastify.css';
import useUser from '../../../../../hooks/useUser';
import { useState } from 'react';
import { toast } from 'react-toastify';
import IconClose from '../../../../../assets/close.svg';
import IconFrame from '../../../../../assets/IconFrame.svg';
import api from '../../../../../services/api';
import { getItem } from '../../../../../utils/storage';
import { useNavigate } from 'react-router-dom';

export default function EditClient() {
    const { setOpenEditClient, setHandleRender } = useUser();

    const navigate = useNavigate()

    const [customer_name, setCustomer_name] = useState('');
    const [customer_email, setCustomer_email] = useState('');
    const [customer_cpf, setCustomer_cpf] = useState('');
    const [customer_phone_number, setCustomer_phone_number] = useState('');
    const [customer_zipcode, setCustomer_zipcode] = useState('');
    const [customer_address, setCustomer_address] = useState('');
    const [customer_complement, setCustomer_complement] = useState('');
    const [customer_district, setCustomer_district] = useState('');
    const [customer_city, setCustomer_city] = useState('');
    const [customer_state, setCustomer_state] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');

    function validateNameEmail(name) {
        return !!name.match(/[A-z][a-z]*/);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setName('');
        setEmail('');
        setCpf('');
        setPhone('');

        if (!customer_name || !validateNameEmail(customer_name)) {
            return setName('Este campo deve ser preenchido');
        }
        if (!customer_email || !validateNameEmail(customer_email)) {
            return setEmail('Este campo deve ser preenchido');
        }
        if (!customer_cpf) {
            return setCpf('Este campo deve ser preenchido');
        }
        if (!customer_phone_number || customer_phone_number.match(/^[ \t]+$/)) {
            return setPhone('Este campo deve ser preenchido');
        }
        if (customer_cpf.length !== 14 || customer_cpf.match(/^[ \t]+$/)) {
            return setCpf('Este campo deve conter 11 dígitos');
        }

        try {
            await api.put(`/update-customer/${getItem('clientId')}`, {
                customer_name,
                customer_email,
                customer_cpf: customer_cpf.replace(/\D/g, ''),
                customer_phone_number: Number(customer_phone_number),
                customer_zipcode: customer_zipcode.replace(/\D/g, ''),
                customer_address: customer_address.trim(),
                customer_complement: customer_complement.trim(),
                customer_district: customer_district.trim(),
                customer_city: customer_city.trim(),
                customer_state: customer_state.trim()
            }, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            setOpenEditClient(false);
            navigate(`/client/${customer_name}/${customer_cpf.replace(/\D/g, '')}`);
            setHandleRender(true);
            toast.success('Edições do cadastro concluídas com sucesso');
        } catch (err) {
            if (err.response.data === 'Este e-mail já está cadastrado') {
                return setEmail('E-mail já cadastrado');
            }
            if (err.response.data === 'Já existe um cliente com esse CPF') {
                return setCpf('CPF já cadastrado');
            }
        }
    }

    async function checkZipCode(event) {
        if (!event.target.value) return;


        const zipcode = event.target.value.replace(/\D/g, '');
        const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`, {
            method: 'GET'
        });
        const address = await response.json();

        setCustomer_address(address.logradouro);
        setCustomer_complement(address.complemento);
        setCustomer_district(address.bairro);
        setCustomer_city(address.localidade);
        setCustomer_state(address.uf);
    }

    function testCpf(e) {
        setCustomer_cpf(cpfMask(e.target.value));
    }

    const cpfMask = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    return (
        <div className='modal-register-client-backgorund'>
            <div className='container-modal-register-client'>
                <div className='modal-register-client-title'>
                    <div>
                        <img src={IconFrame} alt='icone pessoas' />
                        <h1>Editar Cliente</h1>
                    </div>
                    <div
                        className='modal-register-client-iconclose'
                        onClick={() => setOpenEditClient(false)}
                    >
                        <img
                            src={IconClose}
                            alt='fechar'
                            onClick={() => setOpenEditClient(false)}
                        />
                    </div>
                </div>
                <div>
                    <form className='modal-register-client-form' onSubmit={handleSubmit}>
                        <label>Nome*</label>
                        <input className={name !== '' ? 'borda_ativa' : ''} value={customer_name} type='text' placeholder='Digite seu nome' onChange={(e) => setCustomer_name(e.target.value)} />
                        {name && <span>{name}</span>}
                        <label>E-mail*</label>
                        <input className={email !== '' ? 'borda_ativa' : ''} value={customer_email} type='email' placeholder='Digite seu e-mail' onChange={(e) => setCustomer_email(e.target.value)} />
                        {email && <span>{email}</span>}
                        <div className='modal-register-client-cpf-tel width-cpf-tel-cep-dis'>
                            <div>
                                <label>CPF*</label>
                                <input
                                    className={cpf !== '' ? 'borda_ativa' : ''}
                                    value={customer_cpf}
                                    type='text'
                                    placeholder='Digite seu CPF'
                                    onChange={testCpf}
                                />
                                {cpf && <span>{cpf}</span>}
                            </div>
                            <div>
                                <label>Telefone*</label>
                                <input className={phone !== '' ? 'borda_ativa' : ''} value={customer_phone_number} type='number' placeholder='Digite seu Telefone' onChange={(e) => setCustomer_phone_number(e.target.value)} />
                                {phone && <span>{phone}</span>}
                            </div>
                        </div>
                        <label>Endereço</label>
                        <input value={customer_address} type='text' placeholder='Digite o endereço' onChange={(e) => setCustomer_address(e.target.value)} />
                        <label>Complemento</label>
                        <input value={customer_complement} type='text' placeholder='Digite o complemento' onChange={(e) => setCustomer_complement(e.target.value)} />
                        <div className='modal-register-client-address width-cpf-tel-cep-dis'>
                            <div>
                                <label>CEP</label>
                                <input value={customer_zipcode} type='text' placeholder='Digite o CEP' onChange={(e) => setCustomer_zipcode(e.target.value)} onBlur={checkZipCode} />
                            </div>
                            <div>
                                <label>Bairro</label>
                                <input value={customer_district} type='text' placeholder='Digite o bairro' onChange={(e) => setCustomer_district(e.target.value)} />
                            </div>
                        </div>
                        <div className='modal-register-client-city-uf'>
                            <div className='modal-register-client-city'>
                                <label>Cidade</label>
                                <input value={customer_city} type='text' placeholder='Digite a cidade' onChange={(e) => setCustomer_city(e.target.value)} />
                            </div>
                            <div className='modal-register-client-uf'>
                                <label>UF</label>
                                <input value={customer_state} type='text' placeholder='Digite a UF' onChange={(e) => setCustomer_state(e.target.value)} />
                            </div>
                        </div>
                        <div className='modal-register-client-btn'>
                            <div className='modal-register-client-btn-one'>
                                <button onClick={() => setOpenEditClient(false)}>Cancelar</button>
                            </div>
                            <div className='modal-register-client-btn-two'>
                                <button type='submit'>Aplicar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}