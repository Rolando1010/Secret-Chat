import { Link } from "react-router-dom";
import styles from "../../styles/components/conversations-container.module.css";
import useConversation from "../../hooks/useConversation";
import useGlobalState from "../../hooks/useGlobalState";
import Avatar from "../avatar";
import { getChatAvatar } from "../../services/avatar";

const ConversationsList = ({ conversations }) => {
    const { updateConversation } = useConversation();
    const { globalState } = useGlobalState();

    return (
        <ul className={styles.conversationsList}>
            {conversations.map(({ name, administrator }, index) =>
                <Link
                    to={`/conversaciones/${name}`}
                    key={`conversation-${index}`}
                    onClick={() => updateConversation(name)}
                >
                    <li className={globalState.conversation?.conversationName === name ? styles.active : ""}>
                        <Avatar imageSource={getChatAvatar(name)}/>
                        <div>
                            <p className={styles.conversationName}>{name}</p>
                            <p className={styles.conversationAdministrator}>Creado por <strong>{administrator}</strong></p>
                        </div>
                    </li>
                </Link>
            )}
        </ul>
    );
}

export default ConversationsList;