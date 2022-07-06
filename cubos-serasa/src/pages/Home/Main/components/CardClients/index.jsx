import { Link } from 'react-router-dom';
import IconClientOne from '../../../../../assets/IconClient1.svg';
import IconClientTwo from '../../../../../assets/IconClient2.svg';
import IconNoResults from '../../../../../assets/peaplo-no-result.svg';
import useUser from '../../../../../hooks/useUser';
import './styles.css';

export default function CardClients() {
    const { setTableClients, setValue, clientsDefaulter, clientInDay } = useUser();

    const handleChangerPage = (clients) => {
        setValue(1);
        setTableClients(clients);
    }
    return (
        <div className='container-card'>
            <div className='card-defaulter'>
                <div className='defaulter-title'>
                    <div>
                        <img src={IconClientTwo} alt='icone pessoas' />
                        <h1>Clientes Inadimplentes</h1>
                    </div>
                    <span>{clientsDefaulter.length}</span>
                </div>
                <div className='defaulter-sub-title'>
                    <strong >Clientes</strong>
                    <strong >ID do clie.</strong>
                    <strong >CPF</strong>
                </div>
                <div className='defaulter-table'>
                    {clientsDefaulter.length ? clientsDefaulter.map((client) => (
                        <div className='defaulter-columns' key={client.id}>
                            <span>{client.customer_name}</span>
                            <span>{client.id}</span>
                            <span>{
                                (client.customer_cpf)
                                    .replace(/\D/g, '')
                                    .replace(/(\d{3})(\d)/, '$1.$2')
                                    .replace(/(\d{3})(\d)/, '$1.$2')
                                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                    .replace(/(-\d{2})\d+?$/, '$1')
                            }</span>
                        </div>
                    )) :
                        <div className='no-result'>
                            <img
                                src={IconNoResults}
                                alt='sem resultado' />
                        </div>}
                </div>
                <Link
                    to='/client'
                    className='link'
                    onClick={() => handleChangerPage(clientsDefaulter)}>
                    Ver todos
                </Link>
            </div>
            <div className='card-in-day'>
                <div className='in-day-title'>
                    <div>
                        <img src={IconClientOne} alt='icone pessoas' />
                        <h1>Clientes em dia</h1>
                    </div>
                    <span>{clientInDay.length}</span>
                </div>
                <div className='in-day-sub-title'>
                    <strong >Clientes</strong>
                    <strong >Data de venc.</strong>
                    <strong >Valor</strong>
                </div>
                <div className='in-day-table'>
                    {clientInDay.length ? clientInDay.map((client) => (
                        <div className='in-day-columns' key={client.id}>
                            <span>{client.customer_name}</span>
                            <span>{client.id}</span>
                            <span>{
                                (client.customer_cpf)
                                    .replace(/\D/g, '')
                                    .replace(/(\d{3})(\d)/, '$1.$2')
                                    .replace(/(\d{3})(\d)/, '$1.$2')
                                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                    .replace(/(-\d{2})\d+?$/, '$1')
                            }</span>
                        </div>
                    )) :
                        <div className='no-result'>
                            <img src={IconNoResults} alt='sem resultado' />
                        </div>}
                </div>
                <Link
                    to='/client'
                    className='link'
                    onClick={() => handleChangerPage(clientInDay)}>
                    Ver todos
                </Link>
            </div>
        </div>
    );
}