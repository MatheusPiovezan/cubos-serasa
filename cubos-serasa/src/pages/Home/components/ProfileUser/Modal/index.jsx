import { useNavigate } from 'react-router-dom';
import Edit from '../../../../../assets/edit.png';
import Exit from '../../../../../assets/exit.png';
import Triangle from '../../../../../assets/triangle.svg';
import { clearAll } from '../../../../../utils/storage';
import useUser from '../../../../../hooks/useUser';
import * as M from './styled';

export default function Modal({ setShowModal }) {
    const { setOpenEditUser } = useUser();
    const navigate = useNavigate();

    const handleOpenEditProfile = () => {
        setOpenEditUser(true);
        setShowModal(false);
    }

    const handleExitProfile = () => {
        clearAll();
        setShowModal(false);
        navigate(`/`);
    }

    return (
        <>
            <M.Triangle>
                <img src={Triangle} alt='triangulo' />
            </M.Triangle>
            <M.Container>
                <div onClick={() => handleOpenEditProfile()}>
                    <img src={Edit} alt='editar' />
                    <span>Editar</span>
                </div>
                <div onClick={() => handleExitProfile()}>
                    <img src={Exit} alt='sair' />
                    <span>Sair</span>
                </div>
            </M.Container>
        </>
    );
}