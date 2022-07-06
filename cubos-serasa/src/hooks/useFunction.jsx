import useUser from "./useUser";
import useRequest from './useRequest';

export default function useFunction() {
    const { tableClients, tableCharges,
        setClientsDefaulter, setClientInDay,
        setChargeOverdue, setChargesForeseen, setChargesPaid,
        setValueOverdue, setValueForeseen, setValuePaid
    } = useUser();
    const { handleListCustomers, handleListCharges } = useRequest();

    const handleChangerStatus = async () => {
        await handleListCustomers();
        const local = tableClients;
        const defaulters = local.filter((client) => {
            return client.customer_status !== 'Em dia';
        })
        const inDays = local.filter((client) => {
            return client.customer_status === 'Em dia';
        })
        setClientsDefaulter(defaulters);
        setClientInDay(inDays);
    };

    const handleChangerBillings = async () => {
        await handleListCharges();
        const local = tableCharges;

        let valueO = 0;
        let valueF = 0;
        let valueP = 0;
        const overdue = local.filter((charge) => {
            return charge.status === 'Vencida';
        });

        const foreseens = local.filter((charge) => {
            return charge.status === 'Pendente';
        });

        const paids = local.filter((charge) => {
            return charge.status === 'Paga';
        });
        for (let i of overdue) valueO += i.valor;
        for (let i of foreseens) valueF += i.valor;
        for (let i of paids) valueP += i.valor;


        setChargeOverdue(overdue);
        setChargesForeseen(foreseens);
        setChargesPaid(paids);


        setValueOverdue(valueO);
        setValueForeseen(valueF);
        setValuePaid(valueP);
        return;
    }

    return {
        handleChangerStatus,
        handleChangerBillings
    };
}