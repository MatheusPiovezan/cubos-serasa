import { useEffect } from 'react';
import ButtonEditClient from '../../../../../components/Buttons/UserClientPage/edit-client';
import useRequest from '../../../../../hooks/useRequest';
import useUser from '../../../../../hooks/useUser';
import * as U from './styled';
import ImageSmallDolls from '../../../../../assets/small-dolls.svg';
import { useParams } from 'react-router-dom';

export default function DataClient() {
    const { name } = useParams();
    const { getClient, handleRender } = useUser();
    const { handleInformationClient } = useRequest();
    useEffect(() => {
        (async () => { await handleInformationClient() })()
    }, [handleRender]);

    return (
        <>
            <div className='elements_header'>
                <div className='header_one'>
                    <img src={ImageSmallDolls} alt="bonecos" />
                    <h2>{name}</h2>
                </div>
            </div>
            <U.Container>
                {getClient.length &&
                    <>
                        <div className='title-user-data'>
                            <h3>Dados do cliente</h3>
                            <ButtonEditClient />
                        </div>
                        <div className='element-one'>
                            <div>
                                <h4>E-mail</h4>
                                <p>{getClient[0].customer_email}</p>
                            </div>
                            <div>
                                <h4>Telefone</h4>
                                <p>{
                                    (getClient[0].customer_phone_number)
                                        .replace(/\D/g, '')
                                        .replace(/(\d{1})(\d)/, '($1$2) ')
                                        .replace(/(\d{4})(\d)/, '$1$2-')
                                }</p>
                            </div>
                            <div>
                                <h4>CPF</h4>
                                <p>{
                                    (getClient[0].customer_cpf)
                                        .replace(/\D/g, '')
                                        .replace(/(\d{3})(\d)/, '$1.$2')
                                        .replace(/(\d{3})(\d)/, '$1.$2')
                                        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                        .replace(/(-\d{2})\d+?$/, '$1')
                                }</p>
                            </div>
                        </div>
                        <div className='element-two'>
                            <div>
                                <h4>Endereço</h4>
                                <p>{getClient[0].customer_address}</p>
                            </div>
                            <div>
                                <h4>Bairro</h4>
                                <p>{getClient[0].customer_district}</p>
                            </div>
                            <div>
                                <h4>Complemento</h4>
                                <p>{getClient[0].customer_complement}</p>
                            </div>
                            <div>
                                <h4>CEP</h4>
                                <p>{getClient[0].customer_zipcode}</p>
                            </div>
                            <div>
                                <h4>Cidade</h4>
                                <p>{getClient[0].customer_city}</p>
                            </div>
                            <div>
                                <h4>UF</h4>
                                <p>{getClient[0].customer_state}</p>
                            </div>
                        </div>
                    </>}
            </U.Container>
        </>
    );
}