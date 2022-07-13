import useAuth from "../hooks/useAuth";
import CredentialsForm from "../components/credentials-form";

const Login = () => {
    const { login } = useAuth();
    
    return(
        <CredentialsForm
            submit={login}
            title="Inicia sesión y ten conversaciones secretas con tus amigos"
            buttonText="Iniciar Sesión"
            image="/img/login.png"
        />
    );
}

export default Login;