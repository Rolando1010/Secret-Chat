import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Hash from "react-spinners/HashLoader";
import styles from "../../styles/pages/conversations.module.css";
import useConversation from "../../hooks/useConversation";
import useGlobalState from "../../hooks/useGlobalState";
import LoadingScreen from "../../components/loading-screen";
import Message from "./message";

const Messages = () => {
    const { globalState } = useGlobalState();
    const { conversationName } = useParams();
    const { updateConversation, getMessagesConversation } = useConversation();
    const globalStateAskedRef = useRef();
    const scrollRef = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(globalState && !globalStateAskedRef.globalStateAsked){
            globalStateAskedRef.globalStateAsked = true;
            updateConversation(conversationName);
        }
    }, [globalState]);

    useEffect(() => {
        if(globalState?.conversation){
            getMessagesConversation(setMessages);
        }
    }, [globalState?.conversation])
    
    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight);
        const root = document.querySelector("#root");
        root.scrollTo(0, root.scrollHeight);
    }, [messages]);

    return (
        <div className={styles.messagesContainer} ref={scrollRef}>
            {globalState?.loadingMessages ?
                <LoadingScreen
                    loader={Hash}
                    subject="mensajes"
                />
                :
                messages.map(({ body, author }, index) =>
                    <Message key={`message-${index}`} body={body} author={author}/>
                )
            }
        </div>
    );
}

export default Messages;