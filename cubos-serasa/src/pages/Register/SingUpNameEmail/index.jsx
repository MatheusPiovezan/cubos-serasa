import { Link } from 'react-router-dom';
import ButtonRegister from '../../../components/Buttons/RegisterPages/page_one';
import InputRegister from '../../../components/Inputs/RegisterPages/page_one';
import * as S from './styled';
import useUser from '../../../hooks/useUser';

function SingUpNameEmail() {
    const { handleReset, handleClearForm } = useUser();

    const handleChangerPages = () => {
        handleReset()
        handleClearForm();
    }

    return (
        <S.Container>
            <h1>Adicione seus dados</h1>
            <InputRegister />
            <ButtonRegister />
            <p>Já possui uma conta? Faça seu
                <Link
                    to={`/`}
                    className='link'
                    onClick={handleChangerPages}>
                    Login
                </Link>
            </p>
            <div className='nav'>
                <div className='nav_one'></div>
                <div></div>
                <div></div>
            </div>
        </S.Container>
    );
}

export default SingUpNameEmail;