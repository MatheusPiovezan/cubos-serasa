import { useEffect } from 'react';
import useFunction from '../../../../hooks/useFunction';
import useUser from '../../../../hooks/useUser';
import ProfileUser from '../../../../pages/Home/components/ProfileUser/Main';
import EditUser from '../../components/EditUser';
import Billing from '../components/Bills';
import CardClients from '../components/CardClients';
import TotalVlues from '../components/TotalValues';
import './styles.css';

function App() {
  const { handleChangerStatus, handleChangerBillings } = useFunction();
  const { openEditUser } = useUser();

  useEffect(() => {
    (async () => {
      handleChangerStatus();
      handleChangerBillings();
    })()
  }, []);

  return (
    <div className='main'>
      <div className='title-main'>
        <h1>Resumo das cobranças</h1>
        <ProfileUser />
      </div>
      <TotalVlues />
      <Billing />
      <CardClients />
      {openEditUser && <EditUser />}
    </div>
  );
}

export default App;
