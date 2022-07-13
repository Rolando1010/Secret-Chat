import { useRef, useState } from "react";
import Picker from 'emoji-picker-react';
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

    const selectIcon = (event, emojiObject) => {
        setMessage(message + emojiObject.emoji);
        inputRef.current.focus();
    }

    return(
        <form className={styles.messageInputForm} onSubmit={handleSubmit}>
            <label className={styles.inputContainer}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    ref={inputRef}
                    autoFocus
                />
                <i className="far fa-grin-alt">
                    <div className={styles.emojisContainer}>
                        <Picker
                            onEmojiClick={selectIcon}
                            pickerStyle={{
                                boxShadow: "none",
                                margin: "10px 15px 0 auto",
                                transform: "translate(0px, -366px)"
                            }}
                        />
                    </div>
                </i>
            </label>
            <Button type="primary">Enviar</Button>
        </form>
    );
}

export default MessageInput;