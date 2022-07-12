import { useMemo } from "react";
import styles from "../../styles/pages/conversations.module.css";
import useGlobalState from "../../hooks/useGlobalState";

const Message = ({ body, author }) => {
    const { globalState } = useGlobalState();

    const isMyMessage = useMemo(() => globalState.auth.userdata.username === author, [author]);

    return (
        <section
            className={`${styles.messageContainer} ${isMyMessage ? styles.myMessage : ""}`}
        >
            <div>
                <p>{body}</p>
                <small>{author}</small>
            </div>
        </section>
    );
}

export default Message;