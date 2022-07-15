import { Link } from "react-router-dom";
import useGlobalState from "../../hooks/useGlobalState";
import styles from "../../styles/components/menu.module.css";
import useConversation from "../../hooks/useConversation";
import UserSection from "./user-section";
import ThemeSelection from "./theme-selection";

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
                <ThemeSelection/>
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

export default Menu;