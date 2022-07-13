import useAuth from "../hooks/useAuth";
import CredentialsForm from "../components/credentials-form";

const Register = () => {
    const { register } = useAuth();
    
    return (
        <CredentialsForm
            submit={register}
            title="Crea una cuenta y ten divertidas charlas"
            buttonText="Registrarse"
            image="/img/register.png"
        />
    );
}

export default Register;