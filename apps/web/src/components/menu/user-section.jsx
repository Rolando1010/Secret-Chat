import useGlobalState from "../../hooks/useGlobalState";
import useAuth from "../../hooks/useAuth";
import styles from "../../styles/components/menu.module.css";
import Dropdown from "../dropdown";
import { getUserAvatar } from "../../services/avatar";
import Avatar from "../avatar";

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
                <p>{globalState.auth.userdata.username}</p>,

            ]}
            underLineItems={[
                <a onClick={logout}>Cerrar Sesión</a>
            ]}
        />
    );
}

export default UserSection;