import { useParams } from 'react-router-dom';
import ImageFilter from '../../../../assets/filter.svg';
import ImageMagnifyingGlass from '../../../../assets/magnifying-glass.svg';
import ImageSmallDolls from '../../../../assets/small-dolls.svg';
import ButtonClient from '../../../../components/Buttons/ClientPage';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import EditUser from '../../components/EditUser';
import ProfileUser from '../../components/ProfileUser/Main';
import RegisterClients from '../../components/RegisterClient';
import ChargeClient from '../components/ChargeClient';
import DataClient from '../components/DataClient';
import EditClient from '../components/EditClient';
import Table from '../components/Table';
import * as C from './styled';

export default function Client() {
    const { name } = useParams();
    const { openEditUser, openRegisterClient, openEditClient } = useUser();
    const { handleChangerSearchCustomer } = useRequest();

    return (
        <C.Container>
            {!name ?
                <>
                    <div className='title-client'>
                        <h1>Clientes</h1>
                        <ProfileUser />
                    </div>
                    <div className='elements'>
                        <div className='elements_header'>
                            <div className='header_one'>
                                <img src={ImageSmallDolls} alt="bonecos" />
                                <h2>Clientes</h2>
                            </div>
                            <div className='header_two'>
                                <ButtonClient />
                                <img src={ImageFilter} alt="filter" />
                                <div>
                                    <input
                                        type='text'
                                        placeholder='Pesquisar'
                                        onKeyDown={(event) => handleChangerSearchCustomer(event)}
                                    />
                                    <img src={ImageMagnifyingGlass} alt='lupa' className='img' />
                                </div>
                            </div>
                        </div>
                        < Table />
                        {openRegisterClient && <RegisterClients />}
                    </div>
                </>
                :
                <>
                    <div className='title-client'>
                        <div className='title-client-user'>
                            <h1>Clientes</h1>
                            <h2>{'>'}</h2>
                            <h2>Detalhes do cliente</h2>
                        </div>
                        <ProfileUser />
                    </div>
                    <div className='elements'>
                        <DataClient />
                        <ChargeClient />
                    </div>
                    {openEditClient && <EditClient />}
                </>}
            {openEditUser && <EditUser />}
        </C.Container>
    );
}