import ImageFilter from '../../../../assets/filter.svg';
import ImageMagnifyingGlass from '../../../../assets/magnifying-glass.svg';
import ImagePaper from '../../../../assets/paper.svg';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import EditUser from '../../components/EditUser';
import ProfileUser from '../../components/ProfileUser/Main';
import Table from '../Table';
import * as C from './styled';

export default function Charge() {
    const { openEditUser, openEditBilling } = useUser();
    const { handleChangerSearchCharge } = useRequest();

    return (
        <C.Container>
            <div className='title-charge'>
                <h1>Cobranças</h1>
                <ProfileUser />
            </div>
            <div className='elements'>
                <div className='elements_header'>
                    <div className='header_one'>
                        <img src={ImagePaper} alt="icone pdf" />
                        <h2>Cobranças</h2>
                    </div>
                    <div className='header_two'>
                        <img src={ImageFilter} alt="filter" className='filter' />
                        <div>
                            <input
                                type='text'
                                placeholder='Pesquisar'
                                onKeyDown={(event) => handleChangerSearchCharge(event)}
                            />
                            <img src={ImageMagnifyingGlass} alt='lupa' className='img' />
                        </div>
                    </div>
                </div>
                <Table />
            </div>
            {openEditUser && <EditUser />}
        </C.Container>
    );
}