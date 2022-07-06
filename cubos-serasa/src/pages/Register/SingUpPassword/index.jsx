import { Link } from 'react-router-dom';
import ButtonPassword from '../../../components/Buttons/RegisterPages/page_two';
import InputsPasswords from '../../../components/Inputs/RegisterPages/page_two';
import * as S from './styled';
import useUser from '../../../hooks/useUser';

function SingUpPassword() {
    const { handleReset, handleClearForm } = useUser();

    const handleChangerPages = () => {
        handleReset()
        handleClearForm();
    }
    return (
        <S.Container>
            <h1>Escolha sua senha</h1>
            <InputsPasswords />
            <ButtonPassword />
            <p>Já possui conta? Faça seu
                <Link
                    to={`/`}
                    className='link'
                    onClick={handleChangerPages}>
                    Login
                </Link>
            </p>
            <div className='nav'>
                <div></div>
                <div className='nav_two'></div>
                <div></div>
            </div>
        </S.Container>
    );
}

export default SingUpPassword;