import useAuth from "../hooks/useAuth";
import CredentialsForm from "../components/credentials-form";

const Register = () => {
    const { register } = useAuth();
    
    return (
        <CredentialsForm
            submit={register}
            title="Crea una cuenta y ten divertidas charlas"
            buttonText="Registrarse"
            image="https://cdn-icons.flaticon.com/png/512/3815/premium/3815596.png?token=exp=1657233324~hmac=3ec062a8072cec1c2af1a767727f872b"
        />
    );
}

export default Register;