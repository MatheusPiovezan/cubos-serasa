import { useState } from 'react';
import ImageDel from '../../../../assets/icon-del-charge.svg';
import ImageEditCharge from '../../../../assets/icon-edit-charge.svg';
import ImageOrde from '../../../../assets/orde.svg';
import useUser from '../../../../hooks/useUser';
import DelCharge from '../../components/DelCharge';
import EditBillingCharge from '../../components/EditBillingCharge';
import NoResultSearch from '../../components/NoResultSearch';
import BillingDetail from '../BillingDetail';
import * as T from './styled';
import numeral from 'numeral';


export default function Table() {
    const [getCharge, setGetCharge] = useState();
    const [order, setOrder] = useState(false);
    const [openDel, setOpenDel] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [detailsCharge, setDetailsCharge] = useState([]);
    const { tableCharges, openEditBillingCharge, setOpenEditBillingCharge } = useUser();
    const [billingCharge, setBillingCharge] = useState([]);

    const growing = (event) => {
        const local = tableCharges;
        local.sort((a, b) => {
            if (event.target.innerText === "Cliente") {
                let x = a.nome.localeCompare(b.nome);
                console.log(x)
                return x
            }
            let x = a.id - b.id;
            return x;
        });
    }

    const descending = (event) => {
        const local = tableCharges;
        local.sort((a, b) => {
            if (event.target.innerText === "Cliente") {
                let x = b.nome.localeCompare(a.nome);
                return x;
            }
            let x = b.id - a.id;
            return x;
        });
    }

    const handleChangerOrder = (event) => {
        if (!tableCharges.length) return;
        setOrder(!order);
        if (order) return descending(event);
        return growing(event);
    }


    const handleOneGetCharge = (charge) => {
        setGetCharge(charge);
        setOpenDel(true);
    }

    const handleModalDetailsCharge = (charge) => {
        setOpenDetails(true);
        setDetailsCharge(charge);
    }

    return (
        <T.Container>
            <div className='titles'>
                <div onClick={(event) => handleChangerOrder(event)}>
                    <img src={ImageOrde} alt='ordenar' />
                    <h2>Cliente</h2>
                </div>
                <div onClick={(event) => handleChangerOrder(event)}>
                    <img src={ImageOrde} alt='ordenar' />
                    <h2>ID Cob.</h2>
                </div>
                <h2>Valor</h2>
                <h2>Data de Venc.</h2>
                <h2>Status</h2>
                <h2>Descrição   </h2>
            </div>
            {tableCharges.length > 0 ?
                tableCharges.map((charge) => (
                    < div className='clients' key={charge.id} >
                        <h2
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleModalDetailsCharge(charge)}>
                            {charge.nome ? charge.nome : charge.client}
                        </h2>
                        <h2>{charge.id}</h2>
                        <h2 className='value'>R$ {charge.valor ?
                            numeral(charge.valor).divide(100).format('0,0.00') :
                            numeral(charge.value).divide(100).format('0,0.00')}</h2>
                        <h2 className='date'>{new Date(charge.vencimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</h2>
                        <div className={charge.status === `Pendente` ? 'status-pending' : ``
                            || charge.status === 'Vencida' ? 'status-unsuccessful' : ''
                                || charge.status === 'Paga' ? 'status-paid-out' : ''}>
                            <h2>{charge.status}</h2>
                        </div>
                        <div className='description'>
                            <h2>{charge.descricao}</h2>
                            <div className='icons'>
                                <div onClick={() => { { setBillingCharge(charge) } { setOpenEditBillingCharge(true) } }}>
                                    <img src={ImageEditCharge} alt='editar' />
                                    <h2 className='edit'>Editar</h2>
                                </div>
                                <div onClick={() => handleOneGetCharge(charge)}>
                                    <img src={ImageDel} alt='pdf' />
                                    <h2>Excluir</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <NoResultSearch />
            }
            {openDel && <DelCharge setOpenDel={setOpenDel} getCharge={getCharge} />}
            {openDetails && <BillingDetail setOpenDetails={setOpenDetails} detailsCharge={detailsCharge} />}
            {openEditBillingCharge && <EditBillingCharge billingCharge={billingCharge} />}
        </T.Container >
    )
}