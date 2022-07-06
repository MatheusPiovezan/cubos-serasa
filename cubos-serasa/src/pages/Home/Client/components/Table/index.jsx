import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageOrde from '../../../../../assets/orde.svg';
import Pdf from '../../../../../assets/pdf.png';
import useUser from '../../../../../hooks/useUser';
import { setItem } from '../../../../../utils/storage';
import NoResultSearch from '../../../components/NoResultSearch';
import BillingRegister from '../BillingRegister';
import * as T from './styled';

export default function Table() {
    const navigate = useNavigate();
    const [getCharge, setGetCharge] = useState();
    const [order, setOrder] = useState(false);
    const { tableClients, openBillingRegister, setOpenBillingRegister } = useUser();

    const growing = () => {
        const local = tableClients;
        local.sort((a, b) => {
            let x = a.customer_name.localeCompare(b.customer_name);
            return x
        });
    }

    const descending = () => {
        const local = tableClients;
        local.sort((a, b) => {
            let x = b.customer_name.localeCompare(a.customer_name);
            return x
        });
    }

    const handleChangerOrder = () => {
        if (!tableClients.length) return;
        setOrder(!order);
        if (order) return descending();
        return growing();
    }

    const handleChangerPageCustomer = async (client) => {
        navigate(`/client/${client.customer_name}/${client.customer_cpf}`);
        setItem('clientId', client.id);
    }

    return (
        <T.Container>
            <div className='titles'>
                <div onClick={() => handleChangerOrder()}>
                    <img src={ImageOrde} alt='ordenar' />
                    <h2>Cliente</h2>
                </div>
                <h2>CPF</h2>
                <h2>E-mail</h2>
                <h2>Telefone</h2>
                <h2>Status</h2>
                <h2>Criar Cobrança</h2>
            </div>
            {tableClients.length > 0 ?
                tableClients.map((client) => (
                    <div className='clients' key={client.id}>
                        <h2
                            className='name'
                            onClick={() => handleChangerPageCustomer(client)}>
                            {client.customer_name}
                        </h2>
                        <h2>{
                            (client.customer_cpf)
                                .replace(/\D/g, '')
                                .replace(/(\d{3})(\d)/, '$1.$2')
                                .replace(/(\d{3})(\d)/, '$1.$2')
                                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                .replace(/(-\d{2})\d+?$/, '$1')
                        }</h2>
                        <h2 className='email'>{client.customer_email}</h2>
                        <h2>{
                            (client.customer_phone_number)
                                .replace(/\D/g, '')
                                .replace(/(\d{1})(\d)/, '($1$2) ')
                                .replace(/(\d{4})(\d)/, '$1$2-')
                        }</h2>
                        <div className={client.customer_status === `Em dia` ? `in-day` : `defaulter`}>
                            <h2>{client.customer_status}</h2>
                        </div>
                        <div>
                            <div
                                className='icon'
                                onClick={() => { { setGetCharge(client) } { setOpenBillingRegister(true) } }}
                            >
                                <img src={Pdf} alt='pdf' />
                                <h2 className='icon'>Cobrança</h2>
                            </div>
                        </div>
                    </div>
                )) : <NoResultSearch />}
            {openBillingRegister && < BillingRegister getCharge={getCharge} />}
        </T.Container>
    );
}