import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './pages/Home/components/NavBar';
import Dashboard from './pages/Home/Main/Dashboard';
import Client from './pages/Home/Client/Home';
import Charge from './pages/Home/Charge/Main';
import Login from './pages/Login';
import Progress from './pages/Register/Progress';
import SingUpNameEmail from './pages/Register/SingUpNameEmail';
import SingUpPassword from './pages/Register/SingUpPassword';
import Registered from './pages/Register/Registered';
import ErrorPage from './pages/Error';
import { getItem } from './utils/storage';

export default function ProjectRoutes() {
    const token = getItem('token');

    const ProtectRoutes = ({ redirectTo }) => {
        const authorization = token;
        return authorization ? <Outlet /> : <Navigate to={redirectTo} />
    }

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/sing-up-name-email" element={<Progress />} >
                <Route path='' element={<SingUpNameEmail />} />
            </Route>
            <Route path="/sing-up-password" element={<Progress />} >
                <Route path='' element={<SingUpPassword />} />
            </Route>
            <Route path='/registered' element={<Progress />}>
                <Route path='' element={<Registered />} />
            </Route>
            <Route element={<ProtectRoutes redirectTo={`/`} />}>
                <Route path='/dashboard' element={<NavBar />}>
                    <Route path='' element={<Dashboard />} />
                </Route>
                <Route path='/client' element={<NavBar />}>
                    <Route path='' element={<Client />} />
                    <Route path=':name/:cpf' element={<Client />} />
                </Route>
                <Route path='/charge' element={<NavBar />}>
                    <Route path='' element={<Charge />} />
                </Route>
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}