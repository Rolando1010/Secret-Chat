import { useRef, useState } from "react";
import Dot from "react-spinners/DotLoader";
import styles from "../../styles/components/conversations-container.module.css";
import Modal from "../modal";
import useConversation from "../../hooks/useConversation";
import Input from "../input";
import Button from "../button";
import LoadingScreen from "../loading-screen";

const ConversationPanel = ({ originalConversations, setFiltredConversations, setOriginalConversations }) => {
    const modalRef = useRef({});
    const [conversationName, setConversationName] = useState("");
    const { joinConversation, updateConversation } = useConversation();
    const [loading, setLoading] = useState(false);

    const handleSumbit = (event) => {
        event.preventDefault();
        setLoading(true);
        joinConversation(conversationName, (administrator) => {
            if(!originalConversations.filter(({ name }) => name === conversationName).length){
                const newConversations = [...originalConversations, {
                    name: conversationName,
                    administrator
                }];
                setOriginalConversations(newConversations);
                setFiltredConversations(newConversations);
            }
            updateConversation(conversationName);
            setConversationName("");
            modalRef.close();
            setLoading(false);
        });
    }

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setFiltredConversations(originalConversations.filter(({ name }) => name.includes(value)));
    }

    return(<>
        <h3>Coversaciones</h3>
        <div className={styles.conversationPanel}>
            <label>
                <input type="text" placeholder="Buscar" onChange={handleSearchChange}/>
                <i className="fas fa-search"></i>
            </label>
            <button onClick={modalRef.open}>Unirse a una conversación</button>
        </div>
        <Modal
            modalRef={modalRef}
            title="Unirse a conversación"
        >
            {loading ?
                <LoadingScreen loader={Dot} subject="nueva conversación"/>
                :
                <form className={styles.joinConversationForm} onSubmit={handleSumbit}>
                    <Input
                        label="Nombre de Conversación"
                        type="text"
                        value={conversationName}
                        onChange={event => setConversationName(event.target.value)}
                        autoFocus
                    />
                    <Button type="primary">Unirse a conversación</Button>
                </form>
            }
        </Modal>
    </>);
}

export default ConversationPanel;