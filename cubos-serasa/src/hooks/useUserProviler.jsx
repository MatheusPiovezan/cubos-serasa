import { useState } from "react";

export default function useUserProviler() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    const handleReset = () => { setActiveStep(0); };

    const [value, setValue] = useState(0);

    const [openEditUser, setOpenEditUser] = useState(false);
    const [openRegisterClient, setOpenRegisterClient] = useState(false);
    const [openBillingRegister, setOpenBillingRegister] = useState(false);
    const [openEditBilling, setOpenEditBilling] = useState(false);
    const [openEditBillingCharge, setOpenEditBillingCharge] = useState(false);
    const [openEditClient, setOpenEditClient] = useState(false);
    const [openPageClients, setOpenPageClients] = useState(false);
    const [openPageCharges, setOpenPageCharges] = useState(false);


    const [tableClientsImmutable, setTableClientsImmutable] = useState([]);
    const [tableClients, setTableClients] = useState([]);
    const [tableChargesImmutable, setTableChargesImmutable] = useState([]);
    const [tableCharges, setTableCharges] = useState([]);

    const [getClient, setGetClient] = useState([]);
    const [charges, setCharges] = useState([]);
    const [getCharge, setGetCharge] = useState();

    const [clientsDefaulter, setClientsDefaulter] = useState([]);
    const [clientInDay, setClientInDay] = useState([]);
    const [chargeOverdue, setChargeOverdue] = useState([]);
    const [chargesForeseen, setChargesForeseen] = useState([]);
    const [chargesPaid, setChargesPaid] = useState([]);

    const [valueOverdue, setValueOverdue] = useState(0);
    const [valueForeseen, setValueForeseen] = useState(0);
    const [valuePaid, setValuePaid] = useState(0);


    const [formRegister, setFormRegister] = useState({ name: ``, email: ``, password: ``, confPassword: `` });

    const handleClearForm = () => {
        setFormRegister({ user_name: ``, user_email: ``, user_password: ``, confPassword: `` });
    }

    const [handleRender, setHandleRender] = useState(false);
    return {
        activeStep,
        handleNext, handleBack, handleReset,

        value, setValue,

        openEditUser, setOpenEditUser,
        openRegisterClient, setOpenRegisterClient,
        openBillingRegister, setOpenBillingRegister,
        openEditClient, setOpenEditClient, openEditBilling,
        setOpenEditBilling, openEditBillingCharge, setOpenEditBillingCharge,
        openPageClients, setOpenPageClients,
        openPageCharges, setOpenPageCharges,
        handleRender, setHandleRender,

        tableClientsImmutable, setTableClientsImmutable,
        tableClients, setTableClients,
        tableChargesImmutable, setTableChargesImmutable,
        tableCharges, setTableCharges,

        getClient, setGetClient,
        charges, setCharges,
        getCharge, setGetCharge,

        clientsDefaulter, setClientsDefaulter,
        clientInDay, setClientInDay,
        chargeOverdue, setChargeOverdue,
        chargesForeseen, setChargesForeseen,
        chargesPaid, setChargesPaid,

        valueOverdue, setValueOverdue,
        valueForeseen, setValueForeseen,
        valuePaid, setValuePaid,

        formRegister, setFormRegister,
        handleClearForm,
    };
}