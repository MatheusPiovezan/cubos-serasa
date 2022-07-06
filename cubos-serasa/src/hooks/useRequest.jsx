import { format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import erro from '../messages/error';
import success from '../messages/success';
import api from '../services/api';
import { getItem } from '../utils/storage';
import useUser from './useUser';

export default function useRequest() {
    const { cpf } = useParams();
    const {
        setTableClients, tableClientsImmutable, setTableClientsImmutable, setTableCharges,
        tableChargesImmutable, setTableChargesImmutable, setGetClient, setCharges, setGetCharge,
        setOpenEditUser, setOpenBillingRegister
    } = useUser();
    const navigate = useNavigate();

    const UpdateUser = async (form) => {
        try {
            await api.put(`/update-user`, { ...form }, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setOpenEditUser(false);
            toast.success(success.userUpdate)
            return;
        } catch (error) {
            return toast.error(erro.userDontUpdate);
        }
    }

    const handleListCustomers = async () => {
        try {
            const response = await api.get(`/list-customers`, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setTableClients(response.data);
            setTableClientsImmutable(response.data);
            return;
        } catch (error) {
            navigate(`*`);
            return toast.error(erro.notFound);
        }
    }
    const handleChangerSearchCustomer = async (event) => {
        if (event.target.value === ``) return setTableClients(tableClientsImmutable);
        const input = event.target.value;
        try {
            const response = await api.put(`/search-customer`, ({ input }), {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setTableClients(response.data);
            return;
        } catch (error) {
            return setTableClients([]);
        }
    }

    const handleListCharges = async () => {
        try {
            const response = await api.get(`/bill`, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setTableCharges(response.data.bills);
            setTableChargesImmutable(response.data.bills);
            return;
        } catch (error) {
            navigate(`*`);
            return toast.error(erro.notFound);
        }
    }

    const handleChangerSearchCharge = async (event) => {
        if (event.target.value === ``) return setTableCharges(tableChargesImmutable);
        const input = event.target.value.trim();
        try {
            const response = await api.put(`/search-bill`, ({ input }), {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setTableCharges(response.data);
            return;
        } catch (error) {
            return setTableCharges([]);
        }
    }

    const handleInformationClient = async () => {
        try {
            const response = await api.get(`/get-customers/${cpf}`, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setGetClient(response.data);
        } catch (error) {
            return toast.error(erro.notFound);
        }
    }

    const handleBillingClient = async () => {
        try {
            const response = await api.get(`/get-customers/${cpf}`, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            });
            setCharges(response.data);
            setGetCharge(response.data[0]);
        } catch (error) {
            return toast.error(erro.notFound);
        }
    }

    const handleBillingRegister = async (form) => {
        try {
            await api.post(`/bill`, { ...form }, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            })
            setOpenBillingRegister(false);
            toast.success(success.createBilling);
            await handleBillingClient();
            await handleListCharges();
        } catch (error) {
            return toast.error(erro.badRequest);
        }
    }

    const handleDelBill = async (getCharge, setOpenDel) => {
        if (getCharge.status !== 'Pendente') {
            return toast.error(erro.invalidValueStatusBill)
        };
        if (getCharge.due_date < format(new Date(), 'yyyy-MM-dd') && getCharge.status !== 'Pendente') {
            return toast.error(erro.invalidDateBill);
        };
        try {
            await api.delete(`/bill/${getCharge.id}`, {
                headers: {
                    Authorization: `Bearer ${getItem(`token`)}`
                }
            })
            setOpenDel(false);
            toast.success(success.BillDeletSuccess);
            await handleBillingClient();
            await handleListCharges();
        } catch (error) {
            return toast.error(erro.badRequest);
        }
    }

    return {
        UpdateUser,
        handleListCustomers,
        handleChangerSearchCustomer,
        handleListCharges,
        handleChangerSearchCharge,
        handleInformationClient,
        handleBillingClient,
        handleBillingRegister,
        handleDelBill
    };
}