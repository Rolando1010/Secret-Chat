import { useState, useEffect } from "react";
import styles from "../../styles/components/conversations-container.module.css";
import ConversationPanel from "./panel";
import ConversationsList from "./list";
import useConversation from "../../hooks/useConversation";

const ConversationsBar = () => {
    const { getUserConversations } = useConversation();
    const [originalConversations, setOriginalConversations] = useState([]);
    const [filtredConversations, setFiltredConversations] = useState([]);

    useEffect(() => {
        getUserConversations().then(({ conversations: fetchedConversations }) => {
            setOriginalConversations(fetchedConversations);
            setFiltredConversations(fetchedConversations);
        });
    }, []);
    
    return (<>
        <section className={styles.conversationsBar}>
            <ConversationPanel
                originalConversations={originalConversations}
                setOriginalConversations={setOriginalConversations}
                setFiltredConversations={setFiltredConversations}
            />
            <ConversationsList conversations={filtredConversations}/>
        </section>
    </>);
}

export default ConversationsBar;