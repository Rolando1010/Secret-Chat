import { useCallback, useMemo } from "react";
import styles from "../../styles/pages/conversations.module.css";
import useGlobalState from "../../hooks/useGlobalState";

const Message = ({ body, author, dateCreated }) => {
    const { globalState } = useGlobalState();

    const isMyMessage = globalState.auth.userdata.username === author;
    const formatDate = useCallback((date) => date.toLocaleString().replace(",", "").slice(0, -3), []);

    return (
        <section
            className={`${styles.messageContainer} ${isMyMessage ? styles.myMessage : ""}`}
        >
            <article className={styles.message}>
                <p>{body}</p>
                <div>
                    <small>{author}</small>
                    <small>{formatDate(dateCreated)}</small>
                </div>
            </article>
        </section>
    );
}

export default Message;