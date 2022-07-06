import IconDoc from '../../../../assets/IconDoc.svg';
import IconClose from '../../../../assets/close.svg';
import './style.css';
import numeral from 'numeral';
import { format } from 'date-fns';

export default function BillingDetail({ setOpenDetails, detailsCharge }) {
console.log(detailsCharge)
    return (
        <div className='modal-billing-change-background'>
            <div className='container-modal-billing-change'>
                <div className='modal-billing-change-title'>
                    <div>
                        <img src={IconDoc} alt='icone pessoas' />
                        <h1>Detalhe da Cobrança</h1>
                    </div>
                    <div
                        className='icon-close-details'
                        onClick={() => setOpenDetails(false)}>
                        <img
                            src={IconClose}
                            alt='fechar'
                        />
                    </div>
                </div>

                <div>
                    <form className='modal-billing-change-form'>
                        <div className='modal-billing-change-form name'>
                            <h1 className='billing-change-form-one'>Nome</h1>
                            <label>{detailsCharge.nome}</label>
                        </div>
                        <div className='modal-billing-change-form'>
                            <br />
                            <h1 className='billing-change-form-one'>Descrição</h1>
                            <label className='description'>{detailsCharge.descricao}</label>
                        </div>
                        <div className='grid'>
                            <div className='modal-billing-change-form'>
                                <h1 className='billing-change-form-one'>Vencimento</h1>
                                <label>{format(new Date(detailsCharge.vencimento), 'dd/MM/yy')}</label>
                            </div>

                            <div className='modal-billing-change-form'>
                                <h1 className='billing-change-form-one'>Valor</h1>
                                <label>R$ {detailsCharge.valor ?
                                    numeral(detailsCharge.valor).divide(100).format('0,0.00') :
                                    '0, 00'}</label>
                            </div>

                            <div className='modal-billing-change-form'>
                                <h1 className='billing-change-form-one'>ID cobranças</h1>
                                <label>{detailsCharge.id}</label>
                            </div>

                            <div className='modal-billing-change-form'>
                                <h1 className='billing-change-form-one'>Status</h1>
                                <label className={detailsCharge.status === `Pendente` ? 'status-pending' : ``
                                    || detailsCharge.status === 'Vencida' ? 'status-unsuccessful' : ''
                                        || detailsCharge.status === 'Paga' ? 'status-paid-out' : ''}>
                                    {detailsCharge.status}
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
};