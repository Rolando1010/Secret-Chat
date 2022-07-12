import { useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import Circle from "react-spinners/CircleLoader";
import styles from "../../styles/pages/conversations.module.css";
import Modal from "../../components/modal";
import useConversation from "../../hooks/useConversation";
import Avatar from "../../components/avatar";
import useGlobalState from "../../hooks/useGlobalState";
import LoadingScreen from "../../components/loading-screen";
import { getUserAvatar, getChatAvatar } from "../../services/avatar";

const ConversationDetail = () => {
    const { globalState } = useGlobalState();
    const { conversationName } = useParams();
    const modalRef = useRef();
    const { getParticipantsConversation } = useConversation();
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        if(globalState?.conversation){
            getParticipantsConversation(setParticipants);
        }
    }, [globalState?.conversation]);

    return (<>
        <header className={styles.conversationHeader}>
            <section>
                <Avatar imageSource={getChatAvatar(conversationName)}/>
                <h2>{conversationName}</h2>
            </section>
            <button onClick={modalRef.open}>
                <i className="fas fa-info-circle"></i>
            </button>
        </header>
        <Modal modalRef={modalRef} title="Detalle de conversación">
            {globalState?.loadingParticipants ?
                <LoadingScreen
                    loader={Circle}
                    subject="participantes"
                />
                :
                <ul className={styles.participantsList}>
                    <h3>Participantes:</h3>
                    {participants.map(({ identity: username }, index) =>
                        <li key={`participants-${index}`}>
                            <Avatar imageSource={getUserAvatar(username)}/>
                            <span>{username}</span>
                        </li>
                    )}
                </ul>
            }
        </Modal>
    </>);
}

export default ConversationDetail;