import { useRef, useState } from "react";
import styles from "../../styles/pages/conversations.module.css";
import useConversation from "../../hooks/useConversation";
import Button from "../../components/button";

const MessageInput = () => {
    const { sendMessage } = useConversation();
    const [message, setMessage] = useState("");
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(message){
            sendMessage(message);
            setMessage("");
            inputRef.current.focus();
        }
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return(
        <form className={styles.messageInputForm} onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                ref={inputRef}
                autoFocus
            />
            <Button type="primary">Enviar</Button>
        </form>
    );
}

export default MessageInput;