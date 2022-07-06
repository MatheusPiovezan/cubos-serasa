import IconClose from '../../../../assets/close.svg';
import IconAlert from '../../../../assets/icon-alert.svg';
import useRequest from '../../../../hooks/useRequest';
import * as D from './styled';

export default function DelCharge({ setOpenDel, getCharge }) {
    const { handleDelBill } = useRequest();
    
    return (
        <D.Container>
            <div className='del-card'>
                <img src={IconClose} alt='close' className='close' onClick={() => setOpenDel(false)} />
                <img src={IconAlert} alt='alerta' />
                <h3>Tem certeza que deseja excluir essa cobrança?</h3>
                <div className='buttons'>
                    <button onClick={() => setOpenDel(false)}>Não</button>
                    <button
                        className='yes'
                        onClick={() => handleDelBill(getCharge, setOpenDel)}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </D.Container>
    );
}