import Clientfuture from '../../../../../assets/future.png';
import Clientpaid from '../../../../../assets/paid.png';
import Clientunpaid from '../../../../../assets/unpaid.png';
import useUser from '../../../../../hooks/useUser';
import './styles.css';
import numeral from 'numeral';

export default function Clientcards() {
    const { valueOverdue, valueForeseen, valuePaid } = useUser();

    return (
        <div className="cards">
            <div className="paid">
                <img src={Clientpaid} alt="Pago" />
                <div >
                    <span>Cobranças Pagas</span>
                    <span>R$ {valuePaid ? numeral(valuePaid / 100).format('0,0.00') : '0, 00'}</span>
                </div>
            </div>
            <div className="unpaid">
                <img src={Clientunpaid} alt="Não pago" />
                <div>
                    <span>Cobranças Vencidas</span>
                    <span>R$ {valueOverdue ? numeral(valueOverdue / 100).format('0,0.00') : '0, 00'}</span>
                </div>
            </div>
            <div className="future">
                <img src={Clientfuture} alt="Futuras" />
                <div>
                    <span>Cobranças Previstas</span>
                    <span>R$ {valueForeseen ? numeral(valueForeseen / 100).format('0,0.00') : '0, 00'}</span>
                </div>
            </div>
        </div>
    );
}