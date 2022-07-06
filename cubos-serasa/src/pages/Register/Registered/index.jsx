import Checked from '../../../assets/checked.svg';
import ButtonRegistered from '../../../components/Buttons/RegisterPages/page_theer';
import * as R from './styled';

export default function Registered() {
    return (
        <R.Container>
            <div className='card_checked'>
                <div className='image_checked'>
                    <img src={Checked} alt='verificado' />
                </div>
                <h1>Cadastrado realizado com sucesso</h1>
            </div>
            <ButtonRegistered />
            <div className='nav'>
                <div></div>
                <div></div>
                <div className='nav_theer'></div>
            </div>
        </R.Container>
    );
}