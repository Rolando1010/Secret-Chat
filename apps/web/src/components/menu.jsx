import { Link } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import useAuth from "../hooks/useAuth";
import styles from "../styles/components/menu.module.css";
import Dropdown from "./dropdown";
import { getUserAvatar } from "../services/avatar";
import Avatar from "./avatar";
import useConversation from "../hooks/useConversation";

const Menu = () => {
    const { globalState } = useGlobalState();
    const { quitActualConversation } = useConversation();


    return(
        <header className={styles.menu}>
            <section className={styles.siteLink}>
                <Link to="/" onClick={quitActualConversation}>
                    <img src="/img/icon.png"/>
                    <h2>Secret Chat</h2>
                </Link>
            </section>
            <section className={styles.accountLinks}>
                {globalState && (globalState.auth.isAuth ?
                    <UserSection/>
                : <>
                    <Link to="/inicio-sesion">Iniciar Sesión</Link>
                    <Link to="/registro">Registrarse</Link>
                </>)}
            </section>
        </header>
    );
}

const UserSection = () => {
    const { globalState } = useGlobalState();
    const { logout } = useAuth();
    
    return (
        <Dropdown
            className={styles.userSection}
            toggle={
                <Avatar
                    imageSource={getUserAvatar(globalState.auth.userdata.username)}
                />
            }
            overLineItems={[
                <p>{globalState.auth.userdata.username}</p>
            ]}
            underLineItems={[
                <a onClick={logout}>Cerrar Sesión</a>
            ]}
        />
    );
}


export default Menu;