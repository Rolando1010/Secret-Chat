import { useState } from "react";
import { GutterContainer, HalfGutter } from "./gutters";
import Input from "./input";
import styles from "../styles/components/credentials-form.module.css";
import ImageContainer from "./image-container";

const CredentialsForm = ({ submit, title, buttonText, image }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(credentials).then(({ success, message}) => {
            if(!success) setError(message);
        });
    }

    const handleChange = (key, value) => setCredentials({...credentials, [key]: value});

    return(
        <GutterContainer className={styles.credentials}>
            <HalfGutter>
                <h1>{title}</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Nombre de usuario"
                        type="text"
                        value={credentials.username}
                        onChange={event => handleChange("username", event.target.value)}
                        autoFocus
                    />
                    <Input
                        label="Contraseña"
                        type="password"
                        value={credentials.password}
                        onChange={event => handleChange("password", event.target.value)}
                    />
                    <button>{buttonText}</button>
                </form>
            </HalfGutter>
            <HalfGutter>
                <ImageContainer sourceImage={image}/>
            </HalfGutter>
        </GutterContainer>
    );
}

export default CredentialsForm;