import { useEffect, useState } from 'react';
import ImageDel from '../../../../../assets/icon-del-charge.svg';
import ImageEditCharge from '../../../../../assets/icon-edit-charge.svg';
import ImageOrde from '../../../../../assets/orde.svg';
import ButtonNewCharge from '../../../../../components/Buttons/UserClientPage/new-charge';
import useRequest from '../../../../../hooks/useRequest';
import useUser from '../../../../../hooks/useUser';
import DelCharge from '../../../components/DelCharge';
import EditBillingClient from '../../../components/EditBillingClient';
import BillingRegister from '../BillingRegister';
import * as C from './styled';
import numeral from 'numeral';

export default function ChargeClient() {
    const { openBillingRegister, charges, getCharge, setGetCharge, setOpenEditBilling, openEditBilling } = useUser();
    const { handleBillingClient } = useRequest();
    const [openDel, setOpenDel] = useState(false);
    const [order, setOrder] = useState(false);

    const [billing, setBilling] = useState([]);

    useEffect(() => { (async () => { await handleBillingClient(); })() }, []);

    const growing = (event) => {
        const local = charges;
        local.sort((a, b) => {
            if (event.target.innerText === "Data de venc.") {
                let x = new Date(a.due_date);
                let y = new Date(b.due_date);
                return x - y;
            }
            let x = a.id - b.id;
            return x;
        });
    }

    const descending = (event) => {
        const local = charges;
        local.sort((a, b) => {
            if (event.target.innerText === "Data de venc.") {
                let x = new Date(a.due_date);
                let y = new Date(b.due_date);
                return y - x;
            }
            let x = b.id - a.id;
            return x;
        });
    }

    const handleChangerOrder = (event) => {
        if (!charges.length) return;
        setOrder(!order);
        if (order) return descending();
        return growing(event);
    }

    const handleOneGetCharge = (charge) => {
        setGetCharge(charge);
        setOpenDel(true);
    }

    return (
        <C.Container>
            <div className='title-charge-client'>
                <h3>Cobranças do Cliente</h3>
                <ButtonNewCharge />
            </div>
            <div className='table-title'>
                <div onClick={(event) => handleChangerOrder(event)}>
                    <img src={ImageOrde} alt='ordenar' />
                    <h2>ID Cob.</h2>
                </div>
                <div onClick={(event) => handleChangerOrder(event)}>
                    <img src={ImageOrde} alt='ordenar' />
                    <h2>Data de venc.</h2>
                </div>
                <h2>Valor</h2>
                <h2>Status</h2>
                <h2>Descrição</h2>
            </div>
            {charges.length > 0 && charges.map((charge) => (
                <div className='description-charges' key={charge.id}>
                    <h2>{charge.id}</h2>
                    <h2 className='date'>{charge.due_date ?
                        new Date(charge.due_date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) :
                        ''
                    }</h2>
                    <h2 className='value'>{charge.value ?
                        `R$ ${charge.value ? numeral(charge.value / 100).format('0,0.00') : '0,00'}` :
                        ''}</h2>
                    <div className={charge.status === `Pendente` ? 'status-pending' : ``
                        || charge.status === 'Vencida' ? 'status-unsuccessful' : ''
                            || charge.status === 'Paga' ? 'status-paid-out' : ''}>
                        {charge.status &&
                            <h2>{charge.status}</h2>
                        }
                    </div>
                    <div className='description'>
                        <h2>{charge.description}</h2>
                        <div className='icons'>
                            {charge.description &&
                                <>
                                    <div onClick={() => { { setOpenEditBilling(true) } { setBilling(charge) } }}>
                                        <img src={ImageEditCharge} alt='editar' />
                                        <h2 className='edit'>Editar</h2>
                                    </div>
                                    <div onClick={() => handleOneGetCharge(charge)}>
                                        <img src={ImageDel} alt='pdf' />
                                        <h2>Excluir</h2>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            ))}
            {openBillingRegister && <BillingRegister getCharge={getCharge} />}
            {openDel && <DelCharge setOpenDel={setOpenDel} getCharge={getCharge} />}
            {openEditBilling && <EditBillingClient billing={billing} />}
        </C.Container>
    );
}