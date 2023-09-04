import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFunction from "../../../hooks/useFunction";
import useRequest from "../../../hooks/useRequest";
import erro from "../../../messages/error";
import success from "../../../messages/success";
import schemaLogin from "../../../schemas/LoginPage/shemaLogin";
import api from "../../../services/api";
import { setItem } from "../../../utils/storage";

export default function ContainedButtons({ form }) {
  const navigate = useNavigate();
  const { handleChangerStatus, handleChangerBillings } = useFunction();
  const { handleListCustomers, handleListCharges } = useRequest();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await schemaLogin.validate(form);
    try {
      const response = await api.post(`/login`, { ...form });

      const {
        token,
        user: { user_name, user_email, user_cpf, user_phone_number },
      } = response.data;
      setItem(`token`, token);
      setItem(`userName`, user_name);
      setItem(`userEmail`, user_email);
      setItem(`userCpf`, user_cpf);
      setItem(`setPhoneNumber`, user_phone_number);
      handleListCustomers();
      handleListCharges();
      handleChangerStatus();
      handleChangerBillings();
      navigate("/dashboard");
      toast.success(success.usersLoggedInSuccessfully);
    } catch (error) {
      toast.error(erro.loginWrong);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        type="submit"
        variant="contained"
        onClick={(e) => handleSubmit(e)}
        sx={{
          padding: "4px 55px",
          borderRadius: "10px",
          color: "var(--grey_eight)",
          background: "var(--pink)",
          margin: "26px 0 19px 0",
          fontFamily: "Nunito",
          fontWeight: "400",
          fontSize: "1.8rem",
          lineHeight: "25px",
          ":hover": {
            background: "var(--pink)",
          },
        }}
      >
        Entrar
      </Button>
    </Stack>
  );
}
