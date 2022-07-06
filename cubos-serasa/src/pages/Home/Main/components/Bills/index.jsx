import { Link } from 'react-router-dom';
import IconNoResults from '../../../../../assets/peaplo-no-result.svg';
import useUser from '../../../../../hooks/useUser';
import './styles.css';
import numeral from 'numeral';

export default function Billing() {
    const { setTableCharges, setValue, chargeOverdue, chargesForeseen, chargesPaid } = useUser();

    const handleChangerPage = (charge) => {
        setValue(2);
        setTableCharges(charge);
        return;
    }

    return (
        <div className='container-billing'>
            <div className='overdue-card'>
                <div className='overdue-title'>
                    <h1>Cobranças Vencidas</h1>
                    <span>{chargeOverdue.length}</span>
                </div>
                <div className='overdue-sub-title'>
                    <strong >Cliente</strong>
                    <strong >ID da cob.</strong>
                    <strong >Valor</strong>
                </div>
                <div className='overdue-table'>
                    {chargeOverdue.length ? chargeOverdue.map((charge) => (
                        <div className='overdue-columns' key={charge.id}>
                            <span >{charge.nome}</span>
                            <span >{charge.id}</span>
                            <span>R$ {charge.valor ? numeral(charge.valor / 100).format('0,0.00') : '0, 00'}</span>
                        </div>
                    )) :
                        <div className='no-result'>
                            <img
                                src={IconNoResults}
                                alt='sem resultado' />
                        </div>}
                </div>
                <Link
                    to='/charge'
                    className='link'
                    onClick={() => handleChangerPage(chargeOverdue)}>
                    Ver todos
                </Link>
            </div>
            <div className='foreseen-card'>
                <div className='foreseen-title'>
                    <h1>Cobranças Previstas</h1>
                    <span>{chargesForeseen.length}</span>
                </div>
                <div className='foreseen-sub-title'>
                    <strong >Cliente</strong>
                    <strong >ID da cob.</strong>
                    <strong >Valor</strong>
                </div>
                <div className='foreseen-table'>
                    {chargesForeseen.length ? chargesForeseen.map((charge) => (
                        <div className='foreseen-columns' key={charge.id}>
                            <span >{charge.nome}</span>
                            <span >{charge.id}</span>
                            <span>R$ {charge.valor ? numeral(charge.valor / 100).format('0,0.00') : '0, 00'}</span>
                        </div>
                    )) :
                        <div className='no-result'>
                            <img
                                src={IconNoResults}
                                alt='sem resultado' />
                        </div>}
                </div>
                <Link
                    to='/charge'
                    className='link'
                    onClick={() => handleChangerPage(chargesForeseen)}>
                    Ver todos
                </Link>
            </div>
            <div className='paid-card'>
                <div className='paid-title'>
                    <h1>Cobranças Pagas</h1>
                    <span>{chargesPaid.length}</span>
                </div>
                <div className='paid-sub-title'>
                    <strong >Cliente</strong>
                    <strong >ID da cob.</strong>
                    <strong >Valor</strong>
                </div>
                <div className='paid-table'>
                    {chargesPaid.length ? chargesPaid.map((charge) => (
                        <div className='paid-columns' key={charge.id}>
                            <span >{charge.nome}</span>
                            <span >{charge.id}</span>
                            <span>R$ {charge.valor ? numeral(charge.valor / 100).format('0,0.00') : '0, 00'}</span>
                        </div>
                    )) :
                        <div className='no-result'>
                            <img
                                src={IconNoResults}
                                alt='sem resultado' />
                        </div>}
                </div>
                <Link
                    to='/charge'
                    className='link'
                    onClick={() => handleChangerPage(chargesPaid)}>
                    Ver todos
                </Link>
            </div>
        </div>
    );
}